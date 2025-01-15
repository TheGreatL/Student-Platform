import Page from '@/components/Page';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useToast} from '@/hooks/use-toast';

import supabase from '@/utils/supabase';
import {useEffect, useState} from 'react';

import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';

export default function SignUpPage() {
  const {toast} = useToast();
  const navigate = useNavigate();
  const [isSuccessSignup, setIsSuccessSignup] = useState(false);
  const [data, setData] = useState(null);
  const {
    register,
    formState: {errors},
    setError,
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      username: ''
    }
  });

  useEffect(() => {
    if (data === null) return;

    const signUp = async () => {
      let {data: signUpData, error} = await supabase.auth.signUp({
        email: data.email,
        password: data.password
      });
      console.log(signUpData, error);
      if (error) {
        setError('root', {
          message: error.message
        });
        return;
      }

      const {error: insertError} = await supabase.from('Users').insert([
        {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.username
        }
      ]);

      if (insertError) {
        setError('root', {
          message: insertError.message
        });
        return;
      }

      if (!insertError && !error) setIsSuccessSignup(true);
    };
    signUp();
  }, [data, setError]);

  useEffect(() => {
    if (!isSuccessSignup) return;

    toast({
      title: 'Sucess Sign up',
      variant: 'success',
      position: 'top-center'
    });
    navigate('/auth/login', {replace: true});
  }, [isSuccessSignup, toast, navigate]);

  console.log(errors);
  const onFormSignUp = async (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <Page className='flex flex-col items-center justify-center bg-blue-200'>
      <form
        onSubmit={handleSubmit(onFormSignUp)}
        className='flex w-[15rem] flex-col gap-5 rounded-2xl bg-green-200 p-5 lg:w-[50rem]'>
        <h1 className='text-center text-2xl font-bold uppercase tracking-wider'>SignUp</h1>
        {errors?.root && <h1 className='text-xl font-semibold text-red-700'>Error: {errors.root.message}</h1>}
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='firstName'
            className='w-[10rem]'>
            First Name
          </Label>
          <Input
            id='firstName'
            placeholder='First Name'
            className='bg-white'
            {...register('firstName', {required: 'First name is required'})}
          />
          {errors.Name && <p>{errors.firstName.message}</p>}
        </div>
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='lastName'
            className='w-[10rem]'>
            Last Name
          </Label>
          <Input
            id='lastName'
            placeholder='Last Name'
            className='bg-white'
            {...register('lastName', {required: 'Last name is required'})}
          />
          {errors.Name && <p>{errors.Name.lastName}</p>}
        </div>
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='email'
            className='w-[10rem]'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
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
        <div className='flex flex-col gap-5'>
          <Label
            htmlFor='username'
            className='flex-1 text-left'>
            Username
          </Label>
          <Input
            id='username'
            placeholder='jonhdoe123'
            className='bg-white'
            {...register('username', {required: 'Username is required'})}
          />
          {errors.password && <p>{errors.username.message}</p>}
        </div>
        <Button type='submit'>Create Account</Button>
      </form>
    </Page>
  );
}
