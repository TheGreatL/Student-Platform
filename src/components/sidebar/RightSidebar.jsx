import {useContext} from 'react';
import {ScrollArea} from '../ui/scroll-area';
import {AuthContext} from '@/store/AuthProvider';
import useFetch from '@/hooks/useFetch';
import {Loader} from 'lucide-react';
import {Button} from '../ui/button';

export default function RightSidebar() {
  const {authData} = useContext(AuthContext);

  const {data: usersData, error, isFetching} = useFetch('Users');

  return (
    <section className='sticky bottom-0 right-0 top-0 hidden w-[18rem] bg-white md:flex'>
      <ScrollArea className='flex flex-1'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-1 justify-center'>{authData.user === undefined && <h1>All Users</h1>}</div>
          {isFetching && <Loader />}
          {error && <h1>{error}</h1>}
          {!isFetching &&
            !error &&
            usersData.length > 1 &&
            authData.user &&
            usersData.map((user) => (
              <Button
                key={user.id}
                className={`${authData.user?.data.id === user.id ? 'bg-green-400 text-white hover:bg-green-400' : ''}`}>
                {user.username}
              </Button>
            ))}
        </div>
      </ScrollArea>
    </section>
  );
}
