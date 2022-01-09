import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_ID,
      clientSecret: process.env.COGNITO_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),
  ],
});