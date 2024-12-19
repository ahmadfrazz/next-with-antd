'use client';
import Button from '@src/Components/Button/Button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const [gitLoading, setGitLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [fbLoading, setFbLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const onSignIn = async (type: string) => {
    type === 'github'
      ? setGitLoading(true)
      : type === 'google'
        ? setGoogleLoading(true)
        : setFbLoading(true);
    await signIn(type);
    // await signIn(type, {
    //   redirect: false,
    //   callbackUrl: '/dashboard',
    // });
  };
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'authenticated') {
    router.push('/dashboard');
  }

  return (
    <div className='h-screen flex flex-col gap-10 items-center justify-center'>
      {/* <Button loading={gitLoading} onClick={() => onSignIn('github')}>
        {gitLoading ? 'Signing In...' : 'Signin with GitHub'}
      </Button> */}
      <Button loading={googleLoading} onClick={() => onSignIn('google')}>
        {googleLoading ? 'Signing In...' : 'Signin with Google'}
      </Button>
      {/* <Button loading={fbLoading} onClick={() => onSignIn('facebook')}>
        {fbLoading ? 'Signing In...' : 'Signin with Facebook'}
      </Button> */}
    </div>
  );
}
