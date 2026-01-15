"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PortfolioHero from "./components/Hero";
import List from "./components/List";
import PortfolioNavbar from "./components/NavBar";
import NewPost from "./components/NewPost";
import { IsAdmin } from "@/app/lib/login";
import { auth } from "../assets/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Portfolio() {
  const [admin, setAdmin] = useState<boolean | null>(null);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // Determine when to show admin controls
      setAdmin(user && (await IsAdmin(user.uid)));
    });
  }, []);

  const reloadPosts = () => {
    const tmp = reload;
    setReload(!reload);
  };

  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <PortfolioHero></PortfolioHero>
      {admin && <NewPost onSubmit={reloadPosts}></NewPost>}
      <List reload={reload}></List>
    </>
  );
}

export default Portfolio;
