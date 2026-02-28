import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Use a secure secret from environment variables
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        password: { label: "Master Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.password === process.env.ADMIN_PASSWORD) {
          // This creates the session for the Director
          return { id: "1", name: "Chrispine Abala", role: "admin" };
        }
        return null;
      },
    }),
  ],
  // This ensures the session is saved in a cookie
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});