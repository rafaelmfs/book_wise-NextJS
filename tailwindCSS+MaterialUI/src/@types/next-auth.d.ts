import "next-auth";

declare module "next-auth"{
  interface User{
      id: string;
      name: string;
      avatar_url: string | null;
      created_at: Date;
  }
}