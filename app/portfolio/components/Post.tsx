"use client";
import { Comment, Heart, Bin } from "@/app/assets/icons";
import Button from "@/app/components/Button";
import LikeButton from "@/app/components/LikeButton";
import PopUp from "@/app/components/PopUp";
import TimeStamp from "@/app/components/TimeStamp";
import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, useState } from "react";

interface ControlProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Control = (props: ControlProps) => {
  return (
    <div
      className={
        "font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1 " +
        props.className
      }
      onClick={(event) => {
        event.stopPropagation();
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      {props.children}
    </div>
  );
};

interface PostProps {
  data?: any;
  onDelete: () => void;
}

function Post(props: PostProps) {
  const [confirm, setConfirm] = useState<boolean>(false);

  const router = useRouter();

  return (
    <>
      {confirm && (
        <PopUp heading="Delete Project">
          You are about to delete a project
          <div className="flex flex-row gap-2 w-full px-3 sm:px-10">
            <Button
              onClick={() => {
                setConfirm(false);
                props.onDelete();
              }}
              className="mt-4 w-[50%] font-bold bg-gradient text-background"
            >
              Delete
            </Button>
            <Button onClick={() => setConfirm(false)} className="mt-4 w-[50%]">
              Close
            </Button>
          </div>
        </PopUp>
      )}

      {/* Content */}
      <div
        className="border-1 border-foreground-200 rounded-2xl py-4 px-7 hover:scale-101 active:scale-100.005 duration-300 ease-in-out select-none relative cursor-pointer"
        onClick={() => router.push(`/portfolio/${props.data.doc_id}`)}
      >
        <Control
          onClick={() => setConfirm(true)}
          className="aspect-1/1 rounded-full flex justify-center items-center p-0 absolute right-5 top-5"
        >
          <Bin className="stroke-[rgba(254,254,254,.3)] h-[1em] scale-120 m-0"></Bin>
        </Control>

        <TimeStamp date={props.data.date}></TimeStamp>
        <h3 className="text-gradient font-bold text-xl mt-3 mb-2">
          {props.data.heading}
        </h3>
        <p className="sm:w-[50%] my-2 mb-4">{props.data.short_desc}</p>

        <div className="flex flex-row gap-3">
          <LikeButton
            likes={props.data.likes}
            doc_id={props.data.doc_id}
          ></LikeButton>
        </div>
      </div>
    </>
  );
}

export default Post;
