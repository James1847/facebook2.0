import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { useSession } from "next-auth/client"
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home({realtimePosts}) {
  const [session] = useSession()
  if (!session) return <Login></Login>

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head className="flex">
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>

      </Header>
      <main className="flex">
        <Sidebar />
        {/* Feed */}
        <Feed realtimePosts={realtimePosts}/>
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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const realtimePosts = await getDocs(collection(db, "posts"));
  console.log("p:", realtimePosts.docs);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      realtimePosts: realtimePosts.docs.map((r) => ({name: r.data().name, email: r.data().email, message: r.data().message, postImage: r.data().postImage, timestamp: r.data().timestamp.toString(), image: r.data().image}))
    },
  }
}