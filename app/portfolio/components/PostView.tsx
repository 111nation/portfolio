"use client";
import { GitHub, Comment, Heart } from "@/app/assets/icons";
import { ReactNode } from "react";

interface ControlProps {
  children?: ReactNode;
}

const Control = (props: ControlProps) => {
  return (
    <div className="font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1">
      {props.children}
    </div>
  );
};

function PostView() {
  return (
    <div className="border-1 border-foreground-100  rounded-2xl py-4 px-7 my-10">
      <p className="text-[rgba(254,254,255,0.25)] font-inter text-xs">
        3hr. ago
      </p>
      <h3 className="text-gradient font-bold text-xl mt-3 mb-2">youboard.</h3>
      <p className="sm:w-[50%] my-2">
        A Pinterest-like social media for university students
      </p>

      <p className="sm:w-[50%] my-2">
        youboard. is a social media where university students can post their
        #student living. Create an account and post your best highlights.{" "}
      </p>
      <div className="flex flex-row gap-3">
        <Control>
          <Heart className="stroke-[rgba(254,254,254,.3)] h-[1.5em]"></Heart>
          <p className="">20k</p>
        </Control>
        <Control>
          <p>View Online</p>
        </Control>
      </div>
    </div>
  );
}

export default PostView;
