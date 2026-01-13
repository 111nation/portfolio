import Image from "next/image";
import { Cross } from "../assets/icons";

interface ImageViewerProps {
  src: string;
  onClose: () => void;
}

function ImageViewer(props: ImageViewerProps) {
  const interact = (e: any) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    const width = (x / rect.width) * 100;
    const height = (y / rect.height) * 100;
  };

  return (
    <div className="flex items-center justify-center z-3000 fixed bg-background/95 w-screen h-screen">
      <div
        className="font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] rounded-full cursor-pointer flex flex-row items-center justify-center w-fit h-fit p-2 absolute right-5 top-5"
        onClick={props.onClose}
      >
        <Cross className="h-[2em] fill-[rgba(217, 217, 217, 0.07)]"></Cross>
      </div>
      <Image
        className="w-[80%] max-h-[60%] object-contain max-w-300 m-auto cursor-zoom-in"
        width={100}
        height={100}
        sizes="100vw, 100vw"
        alt="Image Viewer: Opened image"
        src={props.src}
        onClick={(e: any) => interact(e)}
      ></Image>
    </div>
  );
}

export default ImageViewer;
