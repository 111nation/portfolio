import { useEffect, useState } from "react";
import { Heart } from "../assets/icons";
import { UpdateLikeCount, UploadPost } from "@/app/lib/posts";

interface LikeProps {
  doc_id: string;
  likes: number;
}

function LikeButton(props: LikeProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikeCount] = useState(0);

  const likePost = async () => {
    try {
      const likes = await UpdateLikeCount(props.doc_id, !liked);
      const prevState = liked;
      setLiked(!prevState);
      setLikeCount(likes);

      if (liked) {
        localStorage.removeItem(props.doc_id);
      } else {
        localStorage.setItem(props.doc_id, "1");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    // Check if post already liked using local storage
    setLiked(!!localStorage.getItem(props.doc_id));
    setLikeCount(props.likes);
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
      {liked && (
        <Heart className="text-purple-500 fill-purple-500 stroke-purple-500 h-[1.5em]"></Heart>
      )}

      {liked === false && (
        <Heart className="fill-none stroke-[rgba(254, 254, 254, 0.3)] h-[1.5em]"></Heart>
      )}
      <p className="">{likes}</p>
    </div>
  );
}

export default LikeButton;
