'use client';
import Button from '@src/Components/Button/Button';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const onSignOut = () => {
    setLoading(true);
    signOut();
  };

  return (
    <div className='flex flex-col justify-center items-center mx-auto w-[50%] min-h-screen text-red-700 gap-6 font-[family-name:var(--font-geist-sans)]'>
      <p className='uppercase font-Geist'>Dashboard Page</p>
      <div>
        <h1>
          Welcome, {status === 'loading' ? 'loading...' : session?.user?.name}
        </h1>
        <Button loading={loading} onClick={onSignOut}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
