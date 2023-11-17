import { trpc } from "@/client/lib/trpc"


const Home = () =>{
  const { data } = trpc.satellite.getCoordinates.useQuery()
  
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}


export default Home