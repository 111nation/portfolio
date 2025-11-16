import { Avatar, Phone, LinkOut } from "../assets/icons";
import ClearButton from "./ClearButton";

function Navbar() {
  return (
    <div className="border-b-1 border-foreground-100 flex flex justify-end py-1.5 px-15 gap-5 sticky top-0 left-0 w-screen z-1000 bg-background">
      <ClearButton>
        <LinkOut className="fill-none stroke-foreground mr-2 h-[1em]" />
        <p>Portfolio</p>
      </ClearButton>
      <ClearButton>
        <Avatar className="fill-foreground mr-2 h-[1em]" />
        <p>Services</p>
      </ClearButton>
      <ClearButton>
        <Phone className="stroke-foreground mr-2 h-[1.1em]" />
        <p>Contact Me</p>
      </ClearButton>
    </div>
  );
}

export default Navbar;
