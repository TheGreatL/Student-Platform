import Header from '@/components/Header';
import LeftSidebar from '@/components/sidebar/LeftSidebar';
import RightSidebar from '@/components/sidebar/RightSidebar';

import {Outlet} from 'react-router';

export default function UserLayout() {
  return (
    <main className='flex h-screen flex-col text-white'>
      <Header />
      <section className='relative flex flex-1 overflow-auto text-black'>
        <LeftSidebar />
        <section className='flex flex-1'>
          <Outlet />
        </section>
        <RightSidebar />
      </section>
    </main>
  );
}
