import { Adapter } from "next-auth/adapters";
import { prismaClient } from "../prisma";

export function authAdapter(): Adapter{
  return {
    async createUser(user) {
      const newUser = {
        name: user.name,
        avatar_url: user.image,
        email: user.email
      }

      const prismaUser = await prismaClient.user.create({ 
        data: newUser
      })

      return {
        ...prismaUser,
        emailVerified: null,
        image: "",
        email: prismaUser.email,
      }
    },

    async getUser(id) {
      const findedUser = await prismaClient.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          rating: true,
          avatar_url: true,
          created_at: true,
        }
      })

      if(findedUser){
        return {  
          ...findedUser,
          email: findedUser.email ?? "",
          emailVerified: null,
        }
      }
      return null
    },

    async getUserByEmail(email) {
      const findedUser = await prismaClient.user.findFirst({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          rating: true,
          avatar_url: true,
          created_at: true,
        }
      })

      if(findedUser){
        return {  
          ...findedUser,
          email: findedUser.email ?? "",
          emailVerified: null,
        }
      }
      return null
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const findedUser = await prismaClient.user.findFirst({
        where: {
          accounts: {
            some: {
              provider_account_id: providerAccountId,
              provider
            }
          }
        }
      })

      if(findedUser){
        return {  
          ...findedUser,
          email: findedUser.email ?? "",
          emailVerified: null,
        }
      }
      return null
    },

    async updateUser(user) {
      const updatedUser = await prismaClient.user.update({
        where: {
          id: user.id
        },
        data: {
          email: user.email,
          name: user.name,
          avatar_url: user.image
        }
      })

      return {  
        ...updatedUser,
        email: updatedUser.email ?? "",
        emailVerified: null,
      }

    },

    async linkAccount(account) {
      await prismaClient.account.create({
        data: {
          access_token: account.access_token,
          expires_at: account.expires_at,
          id_token: account.id_token,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          scope: account.scope,
          session_state: account.session_state,
          type: account.type,
          token_type: account.token_type,
          user_id: account.userId,
        }
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      const session = await prismaClient.session.create({
        data: {
          expires,
          session_token: sessionToken,
          user_id: userId
        }
      })

      return {
        expires: session.expires,
        sessionToken: session.session_token,
        userId: session.user_id
      }
    },

    async getSessionAndUser(sessionToken) {
      const savedSession = await prismaClient.session.findFirst({
        where: {
          session_token: sessionToken
        },
        include: {
          user: true,
        }
      })

      if(savedSession){
        const {user, ...session} = savedSession
        return{
          session: {
            expires: session.expires,
            sessionToken: session.session_token,
            userId: session.user_id
          },
          user: {
            ...user,
            email: user.email ?? "",
            emailVerified: null,
          }
        }
      }
      return null 
    },

    async updateSession({ sessionToken, expires, userId }) {
      const updatedSession = await prismaClient.session.update({
        where: {
          session_token: sessionToken
        },
        data: {
          expires,
          user_id: userId
        }
      })
      return {
        expires: updatedSession.expires,
        sessionToken: updatedSession.session_token,
        userId: updatedSession.user_id
      }
    },

    // async createVerificationToken({ identifier, expires, token }) {
    //   return
    // },
    
    // async useVerificationToken({ identifier, token }) {
    //   return
    // },
  }
}