import { db } from "../firebase";
// import Post from "./Post";
import { collection, getDocs } from "firebase/firestore";
// import { useState, useEffect } from "react";

function Posts({ realtimePosts }) {
  console.log("realtimePosts:", { realtimePosts });

  //   getDocs(collection(db, "posts")).then((realtimePosts) => {
  // setPosts({ realtimePosts: realtimePosts });
  //   });
  //   console.log("userPosts: ", userPosts);

  return (<div>hello</div>);
}

// async function getUserPosts() {
//   const realtimePosts = await getDocs(collection(db, "posts"));
//   console.log("realtimePosts:", realtimePosts.docs);
//   return realtimePosts.docs;
// }

// Posts.getInitialProps = async (ctx) => {
//   const realtimePosts = await getDocs(collection(db, "posts"));
//   console.log("p:", realtimePosts);
//   return { realtimePosts };
// };

export default Posts;
