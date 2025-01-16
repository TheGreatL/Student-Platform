import {NavLink} from 'react-router';
import {ScrollArea} from '../ui/scroll-area';
import AddPost from '../AddPost';

export default function LeftSidebar() {
  const arr = [
    {
      path: 'home',
      text: 'Post'
    },
    {
      path: 'todo',
      text: 'Todo'
    },
    {
      path: 'ai',
      text: 'Ai'
    },
    {
      path: 'schedule',
      text: 'Schedule'
    }
  ];

  return (
    <section className='sticky bottom-0 left-0 top-0 hidden w-[18rem] bg-white md:flex'>
      <ScrollArea className='flex flex-1'>
        <div className='mr-3 flex flex-1 flex-col gap-5 bg-white p-1'>
          <ul className='flex flex-col gap-2'>
            {arr.map((link) => (
              <li
                key={link.path}
                className='flex flex-1'>
                <NavLink
                  to={link.path}
                  end
                  className={({isActive}) =>
                    `flex-1 rounded-2xl p-1 text-center text-lg font-semibold uppercase tracking-wider duration-300 ${isActive ? 'bg-gray-200' : 'hover:bg-gray-400'}`
                  }>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <AddPost />
        </div>
      </ScrollArea>
    </section>
  );
}
