"use client";
import TextEdit from "@/app/components/TextEdit";
import { Bin, ImageIcon } from "../../assets/icons";
import Button from "@/app/components/Button";
import { useState } from "react";
import { UploadPost } from "@/app/lib/posts";
import PopUp from "@/app/components/PopUp";
import { auth } from "@/app/assets/firebase";

interface ImageProps {
  src: string;
  index: number;
  onDelete: (index: number) => void;
}

const ImagePreview = (props: ImageProps) => {
  return (
    <div className="group border-1 border-foreground-200 rounded-xl h-40 sm:h-75 aspect-3/4 flex justify-center items-center m-0 relative">
      <img
        className="group-hover:opacity-80 duration-100 w-full h-full object-cover opacity-60 absolute t-0 l-0 rounded-xl"
        src={props.src}
        alt="Selected Image"
      />
      <div
        onClick={() => props.onDelete(props.index)}
        className="group hover:scale-110 duration-100 cursor-pointer group rounded-full border-1 border-foreground-200 w-fit aspect-1/1 p-2 sm:p-3 bg-background z-1"
      >
        <Bin className="group-hover:stroke-purple-500 stroke-[rgba(254,254,254,.3)] scale-100 h-[1.2em] md:scale-120 m-0 "></Bin>
      </div>
    </div>
  );
};

interface InsertProps {
  onChange: (e: any) => void;
  images: Blob[];
  onDelete: (index: number) => void;
}

const InsertImage = (props: InsertProps) => {
  return (
    <div className="w-full p-5 flex flex-row gap-2 sm:gap-5 overflow-x-scroll scroll-x image-preview overflow-visible">
      {/* Image Select */}
      <label htmlFor="new-image" className="w-fit aspect-3/4 p-0">
        <div className="group border-1 border-foreground-200 rounded-xl h-40 sm:h-75 aspect-3/4 flex justify-center items-center cursor-pointer hover:bg-foreground-50 duration-300 ease-out active:border-2 active:border-purple-500 group-hover m-0">
          <ImageIcon className="group-active:stroke-purple-500 group-active:opacity-100 group-hover:opacity-30 stroke-[rgba(254,254,255)] opacity-10 w-[20%]"></ImageIcon>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="new-image"
            className="hidden"
            name="images"
            onChange={(e) => props.onChange(e)}
            multiple
          />
        </div>
      </label>

      {/* Image Previews */}
      {props.images.map((img, i) => (
        <ImagePreview
          onDelete={props.onDelete}
          key={i}
          index={i}
          src={window.URL.createObjectURL(img)}
        />
      ))}
    </div>
  );
};

interface NewPostProps {
  onSubmit?: () => void;
}

function NewPost(props: NewPostProps) {
  const [images, setImages] = useState<Blob[]>([]);
  const [show, setShowPopUp] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [heading, setHeading] = useState<string>("");

  const onImageSelect = (event: any) => {
    const files: Blob[] = event.target.files;
    if (files && files[0]) {
      const temp: Blob[] = [...files, ...images];
      setImages(temp);
    }
  };

  const onDeleteImage = (key: number) => {
    const temp: Blob[] = [...images];
    if (key > -1) {
      temp.splice(key, 1);
    }
    setImages(temp);
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const formData: FormData = new FormData(form);

    const heading = formData.get("heading");
    const short_desc = formData.get("short-desc");
    const long_desc = formData.get("long-desc");
    const url = formData.get("url") || "";

    if (
      typeof heading !== "string" ||
      typeof short_desc !== "string" ||
      typeof long_desc !== "string"
    ) {
      setHeading("Error");
      setMessage("Data is in an invalid format");
      setShowPopUp(true);

      return;
    }

    // Convert all images to base64
    const base64ImagesPromises = images.map((img) => {
      return new Promise<string>((resolve) => {
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(img);
        reader.onloadend = function () {
          const base64: string = reader.result as string;
          resolve(base64);
        };
      });
    });

    const base64Images: string[] = await Promise.all(base64ImagesPromises);

    UploadPost(
      auth.currentUser?.uid,
      heading,
      short_desc,
      [...base64Images],
      long_desc,
      url.toString(),
    )
      .then(() => {
        setHeading("Uploaded");
        setMessage("Successfully uploaded project");
        setShowPopUp(true);
        if (props.onSubmit) props.onSubmit();
      })
      .catch((e: any) => {
        console.error(e);
        setHeading("Error");
        setMessage(e.message);
        setShowPopUp(true);
      });
  };

  return (
    <>
      {show && (
        <PopUp heading={heading}>
          <div className="flex text-center justify-center align-center w-[95%] m-auto">
            {message}
          </div>
          <Button
            onClick={() => {
              setShowPopUp(false);
            }}
            className="mt-2 w-[50%]"
          >
            Close
          </Button>
        </PopUp>
      )}
      <form
        onSubmit={(e) => onSubmit(e)}
        className="border-1 border-foreground-200 rounded-2xl py-4 px-7  select-none m-10 flex flex-col justify-center items-center gap-3 w-[90%] max-w-350 mx-auto"
      >
        <TextEdit
          className="text-gradient font-semibold text-lg"
          placeholder="Heading"
          name="heading"
          required
        />

        <TextEdit placeholder="Short Description" name="short-desc" required />
        <TextEdit placeholder="URL" name="url" />

        <InsertImage
          onDelete={onDeleteImage}
          onChange={onImageSelect}
          images={images}
        />

        <textarea
          className="font-inter border-1 border-foreground-200 rounded-xl outline-none focus:border-2 focus:border-purple-500 placeholder:font-light placeholder:opacity-40 placeholder:text-[#D9D9D9] w-full pl-6 py-2 text-md w-auto"
          placeholder="Describe the project in full..."
          name="long-desc"
        ></textarea>

        <Button submit>Upload Project</Button>
      </form>
    </>
  );
}

export default NewPost;
