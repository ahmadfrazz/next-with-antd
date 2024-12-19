import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID!;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET!;
const GIT_CLIENT_ID = process.env.GIT_CLIENT_ID!;
const GIT_CLIENT_SECRET = process.env.GIT_CLIENT_SECRET!;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!;

const authOption: NextAuthOptions = {
  //   session: {
  //     strategy: 'jwt',
  //   },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: GIT_CLIENT_ID,
      clientSecret: GIT_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin', // redirect when login failed
    error: '/error',
  },
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/dashboard'; // redirect when login success
    },
    // async signIn({ account, profile }) {
    //   console.log(profile, account);
    //   return true;
    // },
  },
};

const handle = NextAuth(authOption);

export { handle as GET, handle as POST };
