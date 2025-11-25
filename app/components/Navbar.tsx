import { Avatar, Phone, LinkOut } from "../assets/icons";
import ClearButton from "./ClearButton";

function Navbar() {
  return (
    <div className="w-screen border-b-1 border-foreground-100 flex flex justify-evenly sm:justify-end py-1.5 sm:px-15 gap-1.5 sm:gap-5 sticky top-0 left-0 w-screen z-1000 bg-background overflow-scroll">
      <ClearButton>
        <LinkOut className="fill-none stroke-foreground mr-2 h-[1em]" />
        <p className="text-lg sm:text-md">Portfolio</p>
      </ClearButton>
      <ClearButton>
        <Avatar className="fill-foreground mr-2 h-[1em]" />
        <p className="text-lg sm:text-md">Services</p>
      </ClearButton>
      <ClearButton>
        <Phone className="stroke-foreground mr-2 h-[1.1em]" />
        <p className="text-lg sm:text-md">Contact Me</p>
      </ClearButton>
    </div>
  );
}

export default Navbar;
