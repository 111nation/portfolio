import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function ClearButton(props: ButtonProps) {
  return (
    <button className="font-semibold bg-foreground-200 rounded-full py-0.5 px-5 border-1 border-foreground-50 outline-none cursor-pointer">
      {props.children}
    </button>
  );
}

export default ClearButton;
