"use client";
import Link from "next/link";
import Post from "./Post";
import { useEffect, useState } from "react";
import { DeletePostById, GetPosts } from "@/app/lib/posts";
import PopUp from "@/app/components/PopUp";
import Button from "@/app/components/Button";
import { auth } from "@/app/assets/firebase";
import { Spinner } from "@/app/assets/icons";

interface ListProps {
  reload?: boolean;
}

function List(props: ListProps) {
  const [load, setLoadState] = useState<boolean>();
  const [posts, setPosts] = useState<any>([]);
  const [heading, setHeading] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [show, setShowPopUp] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve posts
    setLoadState(true);
    GetPosts()
      .then((res) => {
        const result = JSON.parse(res);
        setPosts([...result]);
        setLoadState(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadState(false);
      });
  }, []);

  const onPostDelete = async (post: any, index: number) => {
    if (index < 0) return;
    try {
      await DeletePostById(auth.currentUser?.uid, post.doc_id, post.images);
      const temp = [...posts];
      temp.splice(index, 1);
      setPosts(temp);

      setHeading("Deleted");
      setMessage("Project has been deleted");
      setShowPopUp(true);
    } catch (err: any) {
      console.error(err);
      setHeading("Error");
      setMessage("Failed to delete project");
      setShowPopUp(true);
    }
  };

  return (
    <>
      {show && (
        <PopUp heading={heading}>
          <div className="text-center w-[90%]">{message}</div>
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

      {load && (
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
