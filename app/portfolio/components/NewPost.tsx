"use client";
import TextEdit from "@/app/components/TextEdit";
import { Bin, ImageIcon } from "../../assets/icons";
import Button from "@/app/components/Button";

const ImagePreview = () => {
  return (
    <div className="border-1 border-foreground-200 rounded-xl h-40 sm:h-75 aspect-3/4 flex justify-center items-center m-0">
      <div className="group hover:scale-110 duration-100 cursor-pointer group rounded-full border-1 border-foreground-200 w-fit aspect-1/1 p-2 sm:p-3 bg-background">
        <Bin className="group-hover:stroke-[rgba(219, 13, 51, 1)] stroke-[rgba(254,254,254,.3)] scale-100 h-[1.2em] md:scale-120 m-0 "></Bin>
      </div>
    </div>
  );
};

const InsertImage = () => {
  return (
    <div className="w-full p-5 flex flex-row gap-2 sm:gap-5 overflow-x-scroll scroll-x image-preview">
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
          />
        </div>
      </label>

      {/* Image Previews */}
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
    </div>
  );
};

function NewPost() {
  return (
    <form className="border-1 border-foreground-200 rounded-2xl py-4 px-7  select-none m-10 flex flex-col justify-center items-center gap-3 w-[90%] max-w-350 mx-auto">
      <TextEdit
        className="text-gradient font-semibold text-lg"
        placeholder="Heading"
        name="heading"
        required
      />

      <TextEdit placeholder="Short Description" name="short-desc" required />

      <InsertImage />

      <textarea
        className="font-inter border-1 border-foreground-200 rounded-xl outline-none focus:border-2 focus:border-purple-500 placeholder:font-light placeholder:opacity-40 placeholder:text-[#D9D9D9] w-full pl-6 py-2 text-md w-auto"
        placeholder="Describe the project in full..."
        name="long-desc"
      ></textarea>

      <Button submit>Upload Project</Button>
    </form>
  );
}

export default NewPost;
