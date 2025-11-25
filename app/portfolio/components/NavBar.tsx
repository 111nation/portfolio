"use client";
import { ReactNode } from "react";
import { Avatar, Phone, LinkOut } from "../../assets/icons";
import ClearButton from "../../components/ClearButton";
import { useRouter } from "next/navigation";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  dest?: string;
}

const NavButton = (props: ButtonProps) => {
  return (
    <ClearButton
      onClick={() => {
        props.dest &&
          document
            .querySelector(props.dest)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        props.onClick && props.onClick();
      }}
      className={props.className}
    >
      {props.children}
    </ClearButton>
  );
};

function PortfolioNavbar() {
  const router = useRouter();
  return (
    <div className="w-screen border-b-1 border-foreground-100 flex flex justify-evenly sm:justify-end py-1.5 sm:px-15 gap-1.5 sm:gap-5 sticky top-0 left-0 w-screen z-1000 bg-background overflow-hidden">
      <NavButton dest="#overview" onClick={() => router.push("/")}>
        <Avatar className="fill-foreground mr-2 h-[1em]" />
        <p className="text-base">Home</p>
      </NavButton>
    </div>
  );
}

export default PortfolioNavbar;
