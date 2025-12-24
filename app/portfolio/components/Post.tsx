"use client";
import { Comment, Heart, Bin } from "@/app/assets/icons";
import { ReactNode } from "react";

interface ControlProps {
  children?: ReactNode;
  className?: string;
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
      }}
    >
      {props.children}
    </div>
  );
};

function Post() {
  return (
    <div className="border-1 border-foreground-200 rounded-2xl py-4 px-7 hover:scale-101 active:scale-100.005 duration-300 ease-in-out select-none relative">
      <Control className="aspect-1/1 rounded-full flex justify-center items-center p-0 absolute right-5 top-5">
        <Bin className="stroke-[rgba(254,254,254,.3)] h-[1em] scale-120 m-0"></Bin>
      </Control>

      <p className="text-[rgba(254,254,255,0.25)] font-inter text-xs">
        3hr. ago
      </p>
      <h3 className="text-gradient font-bold text-xl mt-3 mb-2">youboard.</h3>
      <p className="sm:w-[50%] my-2 mb-15">
        A Pinterest-like social media for university students
      </p>
      <div className="flex flex-row gap-3">
        <Control>
          <Heart className="stroke-[rgba(254,254,254,.3)] h-[1.5em]"></Heart>
          <p className="">20k</p>
        </Control>
        <Control>
          <Comment className="fill-[rgba(254,254,254,.3)] h-[1.5em]"></Comment>
          <p>3.1k</p>
        </Control>
      </div>
    </div>
  );
}

export default Post;
