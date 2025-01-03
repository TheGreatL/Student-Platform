import { useState } from "react";
import { Button } from "./ui/button";
import AddModal from "./modal/AddModal";

export default function AddPost() {
  const [isAddPostModalShowing, setIsAddPostModalShowing] = useState(false);

  const onAddPost = () => {
    setIsAddPostModalShowing(true);
  };
  return (
    <>
      <AddModal
        isShowing={isAddPostModalShowing}
        setIsShowing={() => setIsAddPostModalShowing((state) => !state)}
      />
      <Button className="fixed bottom-12 right-12" onClick={onAddPost}>
        Add post
      </Button>
    </>
  );
}
