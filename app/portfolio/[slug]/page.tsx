import Footer from "@/app/components/Footer";
import PortfolioNavbar from "../components/NavBar";
import PostView from "../components/PostView";

interface ImgProps {
  src: string;
}

const Img = (props: ImgProps) => {
  return (
    <img
      className="rounded-md aspect-auto h-[12em] border-1 border-foreground-100"
      src={props.src}
      alt="post"
    />
  );
};

function Project() {
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <div className="px-5">
        <PostView>
          <Img src="/youboard/1.png"></Img>
          <Img src="/youboard/2.png"></Img>
          <Img src="/youboard/3.png"></Img>
          <Img src="/youboard/4.png"></Img>
        </PostView>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
