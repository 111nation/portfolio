import { ReactNode } from "react";

interface ButtonProps {
  submit?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

function Button(props: ButtonProps) {
  return (
    <input
      type={props.submit == true ? "submit" : "button"}
      className={
        "font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1 hover:scale-101 duration-150 ease-in-out " +
        props.className
      }
      value={props.children ? props.children.toString() : ""}
      onClick={props.onClick ?? (() => {})}
    />
  );
}

export default Button;
