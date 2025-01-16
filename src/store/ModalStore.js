const {create} = require('zustand');

const useMoal = create((set) => ({
  isModalShowing: false,
  toggleModal: (condition) => set(() => ({isModalShowing: condition}))
}));
