import { trpc } from "@/client/lib/trpc"


const Home = () =>{
  const { data } = trpc.satellite.getCoordinates.useQuery()
  
  return (
    <div>

    </div>
  )
}


export default Home