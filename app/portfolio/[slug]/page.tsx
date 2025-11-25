import Footer from "@/app/components/Footer";
import PortfolioNavbar from "../components/NavBar";
import PostView from "../components/PostView";

function Project() {
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <div className="px-5">
        <PostView></PostView>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
