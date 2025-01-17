import PostCard from '@/components/PostCard';
import Page from '../components/Page';
import useFetch from '@/hooks/useFetch';
import AddPost from '@/components/AddPost';

export default function HomePage() {
  const {data: postData, error, isFetching} = useFetch('Post');

  const isPostDataEmpty = postData.length === 0;
  if (isFetching) {
    return (
      <Page>
        <div className='flex flex-col items-center justify-center gap-2 p-2 px-6'>
          Loading....
          {error}
        </div>
      </Page>
    );
  }

  return (
    <Page className='bg-slate-50'>
      <div className='flex flex-col items-center justify-center gap-2 p-2 px-6'>
        {!isFetching && isPostDataEmpty ?
          <h1 className='m-auto text-6xl font-bold uppercase'>No Post</h1>
        : [...postData].reverse().map((data) => (
            <PostCard
              cardData={data}
              key={data.id}
            />
          ))
        }
      </div>
      <div className='fixed bottom-5 right-5 flex lg:hidden'>
        <AddPost />
      </div>
    </Page>
  );
}
