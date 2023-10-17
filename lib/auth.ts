import Provider from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
        Provider.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ]
}