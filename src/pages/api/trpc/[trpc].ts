import { createContext } from "@/server/trpc/context"
import { appRouter } from "@/server/trpc/router"
import * as trpcNext from "@trpc/server/adapters/next"


export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext  
})