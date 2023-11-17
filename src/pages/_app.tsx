import { trpc } from '@/client/lib/trpc'
import type { AppProps } from 'next/app'
import "@/tailwind/globals.css"


const App = ({ Component, pageProps }: AppProps) =>{

  return (
    <Component { ...pageProps } />
  )
}


export default trpc.withTRPC(App)
