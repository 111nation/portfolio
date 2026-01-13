import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Idea from "./components/Idea";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Spotlight></Spotlight>
      <Overview></Overview>
      <Idea></Idea>
      <Contact></Contact>
    </>
  );
}
