import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

function ClearButton(props: ButtonProps) {
  return (
    <button
      className={
        "flex justify-center items-center text-sm md:text-md font-semibold bg-foreground-200 rounded-full text-nowrap sm:py-0.5 px-2 sm:px-5 border-1 border-foreground-50 outline-none cursor-pointer " +
        props.className
      }
    >
      {props.children}
    </button>
  );
}

export default ClearButton;
