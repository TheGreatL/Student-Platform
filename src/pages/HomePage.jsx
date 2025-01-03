import PostCard from "@/components/PostCard";
import Page from "./Page";
import { Button } from "@/components/ui/button";
// import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function HomePage() {
  const cardData = [
    {
      key: 1,
      title: "Card Title 1",
      description: "Card Description 1",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      key: 2,
      title: "Card Title 2",
      description: "Card Description 2",
      content: "Card Content 2",
      footer: "Card Footer 2",
    },
    {
      key: 3,
      title: "Card Title 3",
      description: "Card Description 3",
      content: "Card Content 3",
      footer: "Card Footer 3",
    },
    {
      key: 4,
      title: "Card Title 4",
      description: "Card Description 4",
      content: "Card Content 4",
      footer: "Card Footer 4",
    },
    {
      key: 5,
      title: "Card Title 5",
      description: "Card Description 5",
      content: "Card Content 5",
      footer: "Card Footer 5",
    },
    {
      key: 6,
      title: "Card Title 6",
      description: "Card Description 6",
      content: "Card Content 6",
      footer: "Card Footer 6",
    },
    {
      key: 7,
      title: "Card Title 7",
      description: "Card Description 7",
      content: "Card Content 7",
      footer: "Card Footer 7",
    },
    {
      key: 8,
      title: "Card Title 8",
      description: "Card Description 8",
      content: "Card Content 8",
      footer: "Card Footer 8",
    },
    {
      key: 9,
      title: "Card Title 9",
      description: "Card Description 9",
      content: "Card Content 9",
      footer: "Card Footer 9",
    },
    {
      key: 10,
      title: "Card Title 10",
      description: "Card Description 10",
      content: "Card Content 10",
      footer: "Card Footer 10",
    },
    {
      key: 11,
      title: "Card Title 11",
      description: "Card Description 11",
      content: "Card Content 11",
      footer: "Card Footer 11",
    },
    {
      key: 12,
      title: "Card Title 12",
      description: "Card Description 12asdasdasdas",
      content: "Card Content 12",
      footer: "Card Footer 12",
    },
    {
      key: 13,
      title: "Card Title 13",
      description: "Card Description 13",
      content: "Card Content 13",
      footer: "Card Footer 13",
    },
    {
      key: 14,
      title: "Card Title 14",
      description:
        "Card Description 14 loremasdkasdhjkasfhjkashufgajksghajksghajksgghsdjkghsdjkghsdjkgsdjkhgsdjkhgjkdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds",
      content: "Card Content 14",
      footer: "Card Footer 14",
    },
    {
      key: 15,
      title:
        "Card Title 15asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      description: "Card Description 15",
      content: "Card Content 15",
      footer: "Card Footer 15",
    },
  ];
  const [post, setPosts] = useState([]);

  useEffect(() => {
    const client = new WebSocket("ws://localhost:3000/");
    client.onopen = () => {
      console.log("Connected to the server");
      // Send a message to the server
      client.send("Hellos");
    };

    // Event listener for receiving messages from the server
    client.onmessage = (event) => {
      console.log("Message from server:", event.data);
    };

    // Event listener for errors
    client.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, []);

  // const [todos, setTodos] = useState([]);

  // // Function to get the initial list of todos
  // async function getTodos() {
  //   const { data: todos, error } = await supabase.from("PostTbl").select();
  //   if (error) {
  //     console.error("Error fetching todos:", error);
  //   } else {
  //     setTodos(todos);
  //   }
  // }

  // // Set up the real-time listener
  // useEffect(() => {
  //   // Get initial todos
  //   getTodos();

  //   // Set up real-time subscription to listen for changes on PostTbl
  //   const todosChannel = supabase
  //     .channel("todos") // You can provide a custom name for the channel
  //     .on(
  //       "postgres_changes",
  //       { event: "*", schema: "public", table: "PostTbl" },
  //       (payload) => {
  //         console.log("Change received:", payload);
  //         getTodos(); // Re-fetch the todos when there's a change
  //       },
  //     )
  //     .subscribe();

  //   // Clean up the subscription on component unmount
  //   return () => {
  //     supabase.removeChannel(todosChannel);
  //   };
  // }, []); // Only run once when the component mounts

  // console.log(todos);

  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-2 p-2 px-6">
        {cardData.map((data) => (
          <PostCard cardData={data} key={data.key} />
        ))}
      </div>
      <Button className="fixed bottom-12 right-12">Add post</Button>
    </Page>
  );
}
