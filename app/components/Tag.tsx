import { ReactNode } from "react";

interface TagProp {
  children?: ReactNode;
}

function Tag(props: TagProp) {
  return (
    <div className="flex flex-row justify-center items-center border-1 rounded-full px-3.5 border-[rgba(254,254,255,0.16)]">
      {props.children}
    </div>
  );
}

export default Tag;
