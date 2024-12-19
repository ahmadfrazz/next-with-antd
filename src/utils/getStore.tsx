'use client';
import { useAppSelector } from '@src/lib/Redux/store';
import React from 'react';

export const useGetStore = () => {
  const email = useAppSelector((state) => state.auth.user.email);
  return email;
};
