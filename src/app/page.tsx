'use client';

import Button from '@src/Components/Button/Button';
import { login, logout } from '@src/lib/Redux/Slices/authSlice';
import { useAppDispatch, useAppSelector } from '@src/lib/Redux/store';
import { getCookie, removeCookie, setCookie } from '@src/utils/handleCookies';
import { signIn } from 'next-auth/react';

export default function Home() {
  const state = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const onLogin = () => {
    const user = { email: 'xyz@gmail.com' };
    dispatch(login(user));
    setCookie('email', user.email);
  };
  const onLogout = () => {
    dispatch(logout());
    removeCookie('email');
  };
  const co = getCookie('email');

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-[100%] min-h-screen text-red-700 gap-6 font-[family-name:var(--font-geist-sans)]'>
      <p className='uppercase'>Youni web app</p>
      <Button onClick={onLogin}>Login</Button>
      <Button onClick={onLogout}>Logout</Button>
      <p>
        {state?.email ? 'Logged in' : 'Not logged in'} <br />
      </p>
      <p>{co ? co : 'Not cookie'}</p>
    </div>
  );
}
