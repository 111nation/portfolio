"use client";
import { GitHub, Comment, Heart, Spinner } from "@/app/assets/icons";
import ImageViewer from "@/app/components/ImageViewer";
import LikeButton from "@/app/components/LikeButton";
import TimeStamp from "@/app/components/TimeStamp";
import { ReactNode } from "react";

interface ControlProps {
  children?: ReactNode;
  onClick?: () => void;
}

const Control = (props: ControlProps) => {
  return (
    <div
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      className="select-none font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1 hover:scale-102 duration-30 ease-in"
    >
      {props.children}
    </div>
  );
};

interface PostViewInterface {
  children?: ReactNode;
  data?: any;
}

function PostView(props: PostViewInterface) {
  return (
    <>
      {!props.data && (
        <div className="w-screen -z-0 h-screen top-0 left-0 fixed flex align-center justify-center flex-col">
          <Spinner className="h-[2em] text-gradient"></Spinner>
        </div>
      )}

      {props.data && (
        <div className="border-1 border-foreground-100  rounded-2xl py-4 px-7 my-10 sm:max-w-275 sm:mx-auto">
          <TimeStamp date={props.data.date}></TimeStamp>
          <h3 className="text-gradient font-dm font-bold text-2xl mt-3 mb-2">
            {props.data.heading}
          </h3>
          <p className="my-5 text-lg">{props.data.short_desc}</p>

          <div className="flex flex-col flex-wrap gap-5 my-10 w-full h-75 flex-nowrap overflow-x-scroll image-preview py-5 px-0 items-center justify-center">
            {props.children}
          </div>

          <pre className="my-10 w-full text-wrap">{props.data.long_desc}</pre>
          <div className="flex flex-row gap-3">
            <LikeButton
              likes={props.data.likes}
              doc_id={props.data.doc_id}
            ></LikeButton>
            {props.data.url && (
              <Control onClick={() => window.open(props.data.url, "_blank")}>
                <p>Online Demo</p>
              </Control>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default PostView;
