import { router } from "..";
import { satelliteRouter } from "../routes/satellite";


export const appRouter = router({
  satellite: satelliteRouter
})

export type AppRouter = typeof appRouter