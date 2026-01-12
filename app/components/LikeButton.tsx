import { useEffect, useState } from "react";
import { Heart } from "../assets/icons";
import { LikePostById } from "@/api/posts";

interface LikeProps {
  doc_id: string;
  likes: number;
}

function LikeButton(props: LikeProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikeCount] = useState(0);

  const setLikeStatus = () => {
    // Check if post already liked using local storage
    setLiked(!!localStorage.getItem(props.doc_id));
  };

  const likePost = () => {
    if (liked) {
      localStorage.removeItem(props.doc_id);
      setLiked(false);
    } else {
      localStorage.setItem(props.doc_id, "1");
      setLiked(true);
    }
    setLikeCount(props.likes);
  };

  useEffect(() => {
    // Check if post already liked using local storage
    setLiked(!!localStorage.getItem(props.doc_id));
  }, []);

  const likedStyle: string =
    "font-inter font-semibold text-purple-500 bg-foreground-50 border-2 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1";

  const unlikedStyle: string =
    "font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1";

  return (
    <div
      onClick={(e: any) => {
        e.stopPropagation();
        likePost();
      }}
      className={liked ? likedStyle : unlikedStyle}
    >
      <Heart
        className={`${liked ? `fill-background stroke-purple-500` : `stroke-[rgba(254, 254, 254, 0.3)]`} h-[1.5em]`}
      ></Heart>
      <p className="">{likes}</p>
    </div>
  );
}

export default LikeButton;
