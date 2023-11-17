import { getCoordinatesController } from "@/server/controllers/satellite/queries";
import { 
  procedure, 
  router } from "../..";


const satelliteProcedure = procedure

export const satelliteRouter = router({
  getCoordinates: satelliteProcedure
    .query(() => getCoordinatesController())
})