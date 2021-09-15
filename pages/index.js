import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home({ session }) {
  if (!session) return <Login></Login>

  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>
      <main>
        {/* Sidebar */}
        {/* Feed */}
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