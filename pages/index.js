import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import { useSession } from "next-auth/client"
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home() {
  const [session] = useSession()
  if (!session) return <Login></Login>

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>
      <main className="flex">
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>

      
    </div>
  )
}


export async function getServerSidePages(context) {
  // get the user 
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}