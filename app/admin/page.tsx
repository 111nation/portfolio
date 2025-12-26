"use client";
import { useState } from "react";
import Button from "../components/Button";
import TextEdit from "../components/TextEdit";
import { LogInFirebase } from "@/api/login";
import { useRouter } from "next/navigation";

function Admin() {
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData: FormData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    setError("");

    if (typeof email !== "string" || typeof password !== "string") {
      setError("Invalid form data");
      return;
    }

    LogInFirebase(email, password)
      .then(() => {
        router.push("/portfolio");
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="w-screen h-screen border-0 flex justify-center items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col border-1 border-foreground-200 rounded-xl px-5 py-10 w-[80%] md:max-w-[500px] gap-2 pt-5"
      >
        <h4 className="text-center text-gradient font-inter font-black text-2xl mb-2">
          Admin
        </h4>

        {error && (
          <p className="mb-5 font-inter text-center text-red-400">{error}</p>
        )}
        <TextEdit placeholder="Email" name="email" />
        <TextEdit placeholder="Password" name="password" password />

        <Button className="mt-5" submit>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Admin;
