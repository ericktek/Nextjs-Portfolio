import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "/app/models/User"
import bcrypt from 'bcrypt'
import connectDB from "app/lib/db";


const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB()

        try {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("User not found!");
          }

          // Compare passwords securely using bcrypt
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Wrong Credentials");
          }

        } catch (error) {
          throw new Error(error);
        }
      }
    })
  ],
  pages: {
    error: "/login"
  }
});

export { handler as GET, handler as POST };
