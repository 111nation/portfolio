import Footer from "../components/Footer";
import PortfolioHero from "./components/Hero";
import List from "./components/List";
import PortfolioNavbar from "./components/NavBar";

function Portfolio() {
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <PortfolioHero></PortfolioHero>
      <List></List>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
