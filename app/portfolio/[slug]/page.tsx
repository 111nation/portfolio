"use client";
import Footer from "@/app/components/Footer";
import PortfolioNavbar from "../components/NavBar";
import PostView from "../components/PostView";
import { useEffect, useState } from "react";
import { GetPostById } from "@/api/posts";
import { useParams } from "next/navigation";

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
  const [post, setPost] = useState<any>();
  const params = useParams<{ slug: string }>();
  const { slug } = params;

  useEffect(() => {
    // Get Post
    GetPostById(slug)
      .then((result) => setPost(result))
      .catch((err) => {});
  }, []);
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <div className="px-5">
        <PostView data={post}></PostView>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
