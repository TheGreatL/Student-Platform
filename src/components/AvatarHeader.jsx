import {AuthContext} from '@/store/AuthProvider';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router';
import {Button} from './ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import supabase from '@/service/supabase';
export default function AvatarHeader() {
  const [isSignOut, setIsSignOut] = useState(false);
  const {authData} = useContext(AuthContext);
  const {userSignOut} = useContext(AuthContext);
  useEffect(() => {
    if (!isSignOut) return;
    const signOut = async () => {
      let {error} = await supabase.auth.signOut();
      if (error) return;

      userSignOut();
    };
    signOut();
  }, [isSignOut, userSignOut]);
  const onSignOut = () => {
    setIsSignOut((state) => !state);
  };
  if (!authData?.user)
    return (
      <Link to='/auth/login'>
        <Button variant='ghost'>Login</Button>
      </Link>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='hover:bg-transparent'
          size='icon'>
          <Avatar>
            {/* <AvatarImage src={<UserIcon />} /> */}
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            className='flex-1'
            variant='ghost'
            size='sm'
            onClick={onSignOut}>
            Sign out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
