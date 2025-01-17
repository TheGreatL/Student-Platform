import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

import supabase from '@/service/supabase';
import {useContext, useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import Page from '../../components/Page';
import {Link, useNavigate} from 'react-router';
import {AuthContext} from '@/store/AuthProvider';
import {toast} from 'sonner';
export default function LoginPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const {authData, userLogin} = useContext(AuthContext);

  const {
    register,
    formState: {errors},
    handleSubmit,
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  useEffect(() => {
    if (data === null) return;

    const login = async () => {
      let {data: signInData, error} = await supabase.auth.signInWithPassword({
        ...data
      });
      if (error) {
        setError('root', {
          message: error.message
        });
        return;
      }

      const {data: userData, error: userDataError} = await supabase.from('Users').select('*').eq('email', data.email);
      if (userDataError) {
        setError('root', {
          message: error.message
        });
        return;
      }
      userLogin({...signInData, data: {...userData[0]}});
    };
    login();
  }, [data, setError, userLogin]);

  useEffect(() => {
    if (!authData?.user) return;

    toast('Sucess Login', {
      type: 'success',
      position: 'top-center',
      duration: 1000,
      transition: 'scale',
      className: 'h-[6rem] ',
      iconTheme: 'colored',
      style: {
        display: 'flex',
        backgroundColor: '#3CB043',
        color: '#fff',
        fontSize: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }
    });

    navigate('/', {replace: true});
  }, [navigate, authData]);

  const onFormLoginSubmit = async (data) => {
    setData(data);
  };
  return (
    <Page className='flex flex-col items-center justify-center bg-blue-200'>
      <form
        onSubmit={handleSubmit(onFormLoginSubmit)}
        className='flex w-[15rem] flex-col gap-5 rounded-2xl bg-green-600 p-5 lg:w-[50rem]'>
        {errors?.root && <h1 className='text-xl font-semibold text-red-700'>Error: {errors.root.message}</h1>}
        <h1 className='text-center text-2xl font-bold uppercase tracking-wider'>Login</h1>
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='email'
            className='w-[10rem]'>
            Email
          </Label>
          <Input
            id='email'
            placeholder='jonhdoe@gmail.com'
            className='bg-white'
            {...register('email', {required: 'email is required'})}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='password'
            className='flex-1 text-left'>
            Password
          </Label>
          <Input
            id='password'
            placeholder='Password'
            className='bg-white'
            {...register('password', {required: 'password is required'})}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button>Login</Button>
        <Link
          to='../signup'
          className='text-center font-semibold text-white underline'>
          Sign up
        </Link>
      </form>
    </Page>
  );
}
