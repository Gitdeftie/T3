import NextAuth from "next-auth";
import { authOptions } from "t3/server/auth";

export default NextAuth(authOptions);
