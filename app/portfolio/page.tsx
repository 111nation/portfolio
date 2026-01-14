"use client";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PortfolioHero from "./components/Hero";
import List from "./components/List";
import PortfolioNavbar from "./components/NavBar";
import NewPost from "./components/NewPost";
import { IsAdmin } from "@/app/lib/login";
import { auth } from "../assets/firebase";

function Portfolio() {
  const [admin, setAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (auth.currentUser) {
      IsAdmin(auth.currentUser.uid).then((res) => setAdmin(res));
    } else {
      setAdmin(false);
    }
  }, []);

  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <PortfolioHero></PortfolioHero>
      {admin && <NewPost></NewPost>}
      <List></List>
    </>
  );
}

export default Portfolio;
