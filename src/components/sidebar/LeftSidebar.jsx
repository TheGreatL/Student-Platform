import {NavLink} from 'react-router';
import {ScrollArea} from '../ui/scroll-area';
import AddPost from '../AddPost';

export default function LeftSidebar() {
  const arr = [
    {
      path: 'home',
      text: 'Home'
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
    <section className='sticky bottom-0 left-0 top-0 hidden min-w-[17rem] max-w-[17rem] flex-col justify-center gap-5 bg-white py-5 md:flex'>
      <ScrollArea className='flex max-h-[25rem]'>
        <div className='mr-3 flex flex-col gap-5 bg-white p-1'>
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
        </div>
      </ScrollArea>
      <AddPost />
    </section>
  );
}
