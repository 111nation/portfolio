import ClearButton from "./ClearButton";

function Navbar() {
  return (
    <div className="border-b-1 border-foreground-100 flex flex justify-end py-1.5 px-15 gap-5 sticky top-0 left-0 w-screen">
      <ClearButton>My Portfolio</ClearButton>
      <ClearButton>Services</ClearButton>
      <ClearButton>Contact Me</ClearButton>
    </div>
  );
}

export default Navbar;
