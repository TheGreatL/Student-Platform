import NavigationBar from './NavigationBar';
import Search from './Search';
import {Button} from './ui/button';
import AvatarHeader from './AvatarHeader';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex flex-col bg-blue-400'>
      <section className='flex gap-2 p-3'>
        <Button variant='ghost'>Logo</Button>
        <Search />
        <AvatarHeader />
      </section>
      <NavigationBar />
    </header>
  );
}
