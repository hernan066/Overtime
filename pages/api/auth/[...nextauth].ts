import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { checkUserEmailPassword, oAUthToDbUser } from "../../../database/dbUsers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "Correo:",
          type: "email",
          placeholder: "correo@google.com",
        },
        password: {
          label: "Contraseña:",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials) {
        console.log({ credentials });
        // return { name: 'Juan', correo: 'juan@google.com', role: 'admin' };

        return await checkUserEmailPassword( credentials!.email, credentials!.password );
        
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    maxAge: 2592000, /// 30d
    strategy: 'jwt',
    updateAge: 86400, // cada día
  },

  callbacks: {
    async jwt({ token, account, user }) {
      // console.log({ token, account, user });

      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            token.user = await oAUthToDbUser(
              user?.email || "",
              user?.name || ""
            );
            break;

          case "credentials":
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }){
      // console.log({ session, token, user });

      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    }
  },
});
