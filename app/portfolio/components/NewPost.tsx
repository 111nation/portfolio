import { ImageIcon } from "../../assets/icons";

const ImagePreview = () => {
  return (
    <div className="border-1 border-foreground-200 rounded-xl h-40 sm:h-75 aspect-3/4 flex justify-center items-center cursor-pointer hover:bg-foreground-50 duration-300 ease-out active:border-2 active:border-purple-500 group-hover m-0"></div>
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
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
      <ImagePreview></ImagePreview>
    </div>
  );
};

function NewPost() {
  return (
    <form className="border-1 border-foreground-200 rounded-2xl py-4 px-7  select-none m-10 flex flex-col justify-center items-center gap-3 w-[90%] max-w-350 mx-auto">
      <input
        type="text"
        className="font-inter border-1 border-foreground-200 rounded-3xl outline-none focus:border-2 focus:border-purple-500 placeholder:font-light placeholder:opacity-40 placeholder:text-[#D9D9D9] w-full pl-6 py-2 text-gradient font-semibold text-lg w-auto"
        placeholder="Heading"
        name="heading"
        required
      />

      <input
        type="text"
        className="font-inter border-1 border-foreground-200 rounded-3xl outline-none focus:border-2 focus:border-purple-500 placeholder:font-light placeholder:opacity-40 placeholder:text-[#D9D9D9] w-full pl-6 py-2 text-md w-auto"
        placeholder="Short Description"
        name="short-desc"
        required
      />

      <InsertImage />

      <textarea
        className="font-inter border-1 border-foreground-200 rounded-xl outline-none focus:border-2 focus:border-purple-500 placeholder:font-light placeholder:opacity-40 placeholder:text-[#D9D9D9] w-full pl-6 py-2 text-md w-auto"
        placeholder="Describe the project in full..."
        name="long-desc"
      ></textarea>

      <input
        type="submit"
        className="font-inter text-[rgba(254,254,255,0.39)] bg-foreground-50 border-1 border-[rgba(254,254,255,0.07)] py-2 px-3 rounded-3xl cursor-pointer flex flex-row items-center gap-1 hover:scale-101 duration-150 ease-in-out"
        value="Upload Project"
      />
    </form>
  );
}

export default NewPost;
