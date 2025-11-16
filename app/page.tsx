import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
      <Spotlight></Spotlight>
      <Footer></Footer>
    </>
  );
}
