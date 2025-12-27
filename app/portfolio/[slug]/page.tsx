"use client";
import Footer from "@/app/components/Footer";
import PortfolioNavbar from "../components/NavBar";
import PostView from "../components/PostView";
import { useEffect, useState } from "react";
import { GetImagesByPostId, GetPostById } from "@/api/posts";
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

  const loadPost = async () => {
    const post: any = await GetPostById(slug);
    const images = await GetImagesByPostId(slug, [...post.images]);

    const postResult = { ...post, images: [...images] };

    return postResult;
  };

  useEffect(() => {
    loadPost()
      .then((res: any) => setPost(res))
      .catch((err) => {});
  }, []);
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      <div className="px-5">
        <PostView data={post}>
          {post &&
            post.images.map((img: string, i: number) => (
              <img
                className="rounded-lg h-[90%] w-auto aspect-auto hover:scale-105 duration-100 hover:border-2 hover:border-purple-500"
                src={img}
                key={i}
                alt="Images attached to project"
              />
            ))}
        </PostView>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
