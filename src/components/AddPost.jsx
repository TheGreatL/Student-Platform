import {useContext, useState} from 'react';
import {Button} from './ui/button';
import AddModal from './modal/AddModal';
import {AuthContext} from '@/store/AuthProvider';
import {useNavigate} from 'react-router';

export default function AddPost() {
  const navigate = useNavigate();
  const [isAddPostModalShowing, setIsAddPostModalShowing] = useState(false);

  const onAddPost = () => {
    setIsAddPostModalShowing(true);
  };

  const {authData} = useContext(AuthContext);

  return (
    <>
      <AddModal
        isShowing={isAddPostModalShowing}
        setIsShowing={() => setIsAddPostModalShowing((state) => !state)}
      />
      <Button
        className=''
        onClick={() => {
          if (authData.user) {
            onAddPost();
            return;
          }

          navigate('/auth/login');
        }}>
        Add post
      </Button>
    </>
  );
}
