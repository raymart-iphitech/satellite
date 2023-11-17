import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";


export const createContext = async( opts: CreateNextContextOptions ) =>{

  return opts
}

export type TrpcContext = inferAsyncReturnType<typeof createContext>