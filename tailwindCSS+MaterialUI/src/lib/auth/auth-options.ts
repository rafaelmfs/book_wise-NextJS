import { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { authAdapter } from "./auth-adapter";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_URL,
  providers: [
    Github({
      clientId: String(process.env.GITHUB_APP_CLIENT_ID),
      clientSecret: String(process.env.GITHUB_APP_CLIENT_SECRET),
    }),
    Google({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)
    })
  ],
  adapter: authAdapter(),
}