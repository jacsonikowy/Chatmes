import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { db } from "./db";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  adapter: UpstashRedisAdapter(db) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.image = token.image as string;
        session.user.name = token.name;
      }

      return session;
    },
    async jwt({ token, user }) {
      const userFetch = await db.get(`user:${token.id}`);

      if (!userFetch) {
        if (user) {
          token.id = user.id;
        }
        return token;
      }

      const dbUser = userFetch as User;

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
      };
    },
    async signIn(session) {
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
