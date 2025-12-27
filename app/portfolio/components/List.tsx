"use client";
import Link from "next/link";
import Post from "./Post";
import { useEffect, useState } from "react";
import { GetPosts } from "@/api/posts";

function List() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    // Retrieve posts
    GetPosts()
      .then((result) => setPosts([...result]))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:px-10 px-5 my-20 gap-5 sm:max-w-200 sm:mx-auto">
        {posts.map((post: any, index: number) => (
          <Post key={index} data={post}></Post>
        ))}
      </div>
    </>
  );
}

export default List;
