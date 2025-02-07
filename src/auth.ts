import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs"; // For password hashing and comparison
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/db";

interface TCredentials {
  email: string;
  password: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as TCredentials;

        // Find the user in the database by email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          // No user found with the provided email
          throw new Error("Invalid credentials.");
        }

        // Compare the provided password with the hashed password in the database
        if (!user.password) {
          throw new Error("Invalid credentials.");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
          // Password does not match
          throw new Error("Invalid credentials.");
        }

        // If everything is valid, return the user object
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          // Add any other user properties you want to include in the session
        };
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      // Add user ID to the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user ID to the session
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have this environment variable set
});