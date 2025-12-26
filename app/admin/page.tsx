"use client";
import Button from "../components/Button";
import TextEdit from "../components/TextEdit";

function Admin() {
  return (
    <div className="w-screen h-screen border-0 flex justify-center items-center">
      <form className="flex flex-col border-1 border-foreground-200 rounded-xl px-5 py-10 w-[80%] md:max-w-[500px] gap-2 pt-5">
        <h4 className="text-center text-gradient font-inter font-black text-2xl mb-2">
          Admin
        </h4>
        <TextEdit placeholder="Username" name="username" />
        <TextEdit placeholder="Password" name="password" password />
        <Button className="mt-5" submit>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Admin;
