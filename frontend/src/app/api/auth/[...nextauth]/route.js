import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt from 'jsonwebtoken';
import axios from 'axios';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'user@email.com' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '******',
        },
      },
      async authorize(credentials, req) {
        try {
          // const { data } = await axios.post(
          //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          //   {
          //     email: credentials?.email,
          //     password: credentials?.password,
          //   },
          // );
          // const decodedToken = jwt.decode(data.token);

          const decodedToken = { name: 'user', email: 'user@email.com' };

          return {
            ...decodedToken,
          };
        } catch (error) {
          throw new Error(
            'La dirección de email o la contraseña son incorrectos.',
          );
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
