import {AuthContext} from '@/store/AuthProvider';
import {useContext} from 'react';
import {Link} from 'react-router';
import {Button} from './ui/button';

export default function AvatarHeader() {
  const {authData} = useContext(AuthContext);

  if (!authData?.user)
    return (
      <Link to='/auth/login'>
        <Button variant='ghost'>Login</Button>
      </Link>
    );

  return <Button variant='ghost'>Avatar</Button>;
}
