import Footer from "../components/Footer";
import PortfolioHero from "./components/Hero";
import List from "./components/List";
import PortfolioNavbar from "./components/NavBar";
import NewPost from "./components/NewPost";

function Portfolio() {
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <PortfolioHero></PortfolioHero>
      <NewPost></NewPost>
      <List></List>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
