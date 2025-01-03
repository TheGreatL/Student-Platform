import PostCard from "@/components/PostCard";
import Page from "./Page";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import AddPost from "@/components/AddPost";

export default function HomePage() {
  const { data, error, isFetching } = useFetch("PostTbl");
  console.log([...data].reverse());

  if (isFetching || error) {
    return (
      <Page>
        <div className="flex flex-col items-center justify-center gap-2 p-2 px-6">
          Loading....
          {error}
        </div>
        <Button className="fixed bottom-12 right-12">Add post</Button>
      </Page>
    );
  }

  return (
    <Page>
      <div className="flex flex-col items-center justify-center gap-2 p-2 px-6">
        {data.map((data) => (
          <PostCard cardData={data} key={data.id} />
        ))}
      </div>
      <AddPost />
    </Page>
  );
}
