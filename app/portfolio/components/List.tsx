"use client";
import Link from "next/link";
import Post from "./Post";
import { useEffect, useState } from "react";
import { DeletePostById, GetPosts } from "@/api/posts";
import PopUp from "@/app/components/PopUp";
import Button from "@/app/components/Button";
import { auth } from "@/app/assets/firebase";
import { Spinner } from "@/app/assets/icons";

function List() {
  const [posts, setPosts] = useState<any>([]);
  const [heading, setHeading] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [show, setShowPopUp] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve posts
    GetPosts()
      .then((result) => setPosts([...result]))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onPostDelete = async (post: any, index: number) => {
    if (index < 0) return;
    try {
      await DeletePostById(auth.currentUser, post.doc_id, post.images);
      const temp = [...posts];
      temp.splice(index, 1);
      setPosts(temp);

      setHeading("Deleted");
      setMessage("Project has been deleted");
      setShowPopUp(true);
    } catch (err: any) {
      setHeading("Error");
      setMessage(err);
      setShowPopUp(true);
    }
  };

  return (
    <>
      {show && (
        <PopUp heading={heading}>
          {message}
          <Button
            onClick={() => {
              setShowPopUp(false);
            }}
            className="mt-4 w-[50%]"
          >
            Close
          </Button>
        </PopUp>
      )}

      {posts.length <= 0 && (
        <div className="m-auto flex flex-row gap-5 my-30 align-center justify-center">
          <Spinner className="h-[2em] text-gradient"></Spinner>
        </div>
      )}

      <div className="flex flex-col sm:px-10 px-5 my-15 gap-5 sm:max-w-200 sm:mx-auto">
        {posts.map((post: any, index: number) => (
          <Post
            key={index}
            data={post}
            onDelete={() => onPostDelete(post, index)}
          ></Post>
        ))}
      </div>
    </>
  );
}

export default List;
