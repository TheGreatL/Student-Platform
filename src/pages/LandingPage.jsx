import {useEffect} from 'react';
import {useNavigate} from 'react-router';

export default function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchLocal = async () => {
      const isOldUser = await localStorage.getItem('oldUser');

      if (isOldUser) {
        navigate('/home', {replace: true});
      }
    };
    fetchLocal();
  }, [navigate]);
  const onClickProceed = async () => {
    await localStorage.setItem('oldUser', true);
    navigate('/home', {replace: true});
  };
  return (
    <div className='flex h-screen flex-col gap-5 bg-red-500'>
      <span> LandingPage</span>
      <button onClick={onClickProceed}>Proceed</button>
    </div>
  );
}
