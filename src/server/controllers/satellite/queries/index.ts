import { trpcSuccess } from "@/server/trpc/utils/trpc"


export const getCoordinatesController = async() =>{

  return trpcSuccess({}, "Success")
}