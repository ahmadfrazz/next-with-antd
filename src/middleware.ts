import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(req: NextRequest) {
  // const isLoggedIn = req.cookies.get('email');
  // const isLoggedIn = true;
  // if (!isLoggedIn) {
  //   return NextResponse.redirect(new URL('/signin', req.url));
  // }
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/stripe/:path*'],
};
