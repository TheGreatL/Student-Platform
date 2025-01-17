export const formatDate = (passedDate) => {
  const date = new Date(passedDate);

  const currentDate = new Date();

  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-11, so add 1)
  const day = date.getDate().toString().padStart(2, '0'); // Get day (1-31)
  const year = date.getFullYear().toString(); // Get last two digits of the year

  // Calculate the time difference in milliseconds
  const timeDifferenceInMilliseconds = currentDate - date;

  // Convert milliseconds to minutes (1 minute = 60,000 milliseconds)
  const timeDifferenceInMinutes = timeDifferenceInMilliseconds / 60000;

  return `${timeDifferenceInMinutes.toFixed(0)}m ago`;
};
