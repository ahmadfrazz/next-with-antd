'use client';
import { SessionProvider } from 'next-auth/react';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
}
