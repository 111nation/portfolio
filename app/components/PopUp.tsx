import { ReactNode } from "react";

interface PopUpProps {
  heading: string;
  children?: ReactNode;
}

function PopUp(props: PopUpProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-background/40 z-1000 flex justify-center items-center">
      <div className="border-2 border-purple-500 bg-background rounded-2xl px-0 py-5 w-[80%] md:max-w-[400px] gap-2 flex flex-col justify-center items-center font-inter">
        <h4 className="text-center text-gradient font-inter font-black text-2xl">
          {props.heading}
        </h4>
        {props.children}
      </div>
    </div>
  );
}

export default PopUp;
