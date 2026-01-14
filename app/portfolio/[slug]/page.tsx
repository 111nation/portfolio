"use client";
import Image from "next/image";
import PortfolioNavbar from "../components/NavBar";
import PostView from "../components/PostView";
import { useEffect, useState } from "react";
import { GetImagesByPostId, GetPostById } from "@/app/lib/posts";
import { useParams } from "next/navigation";
import ImageViewer from "@/app/components/ImageViewer";

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
  const [src, setSrc] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const params = useParams<{ slug: string }>();
  const { slug } = params;

  const loadPost = async () => {
    const post: any = JSON.parse(await GetPostById(slug));
    const images = JSON.parse(await GetImagesByPostId(slug, [...post.images]));

    const postResult = { ...post, images: [...images] };

    return postResult;
  };

  useEffect(() => {
    loadPost().then((res: any) => {
      setPost(res);
    });
  }, []);
  return (
    <>
      <PortfolioNavbar></PortfolioNavbar>
      {view && (
        <ImageViewer
          onClose={() => {
            setView(false);
          }}
          src={src}
        ></ImageViewer>
      )}
      <div className="px-5">
        <PostView data={post}>
          {post &&
            post.images.map((img: string, i: number) => (
              <div
                key={i}
                className="h-full w-fit active:scale-105 hover:scale-105 overflow-hidden duration-100  active:border-2  hover:border-2 hover:border-purple-500 rounded-lg"
              >
                <Image
                  className="w-auto h-full object-cover aspect-auto"
                  width={200}
                  height={100}
                  sizes="100vw, 100vw"
                  priority
                  src={img}
                  onClick={() => {
                    setSrc(img);
                    setView(true);
                  }}
                  key={i}
                  alt="Images attached to project"
                />
              </div>
            ))}
        </PostView>
      </div>
    </>
  );
}

export default Project;
