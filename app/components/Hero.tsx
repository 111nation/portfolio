import ClearButton from "./ClearButton";
import Tag from "./Tag";

function Hero() {
  return (
    <div className="w-screen h-auto">
      <div className="bg-foreground-50 border-1 border-foreground-200 my-3 mx-4 lg:my-5 lg:mx-10 rounded-xl px-10 py-8 xl:py-20 xl:px-25 2xl:mx-auto relative block lg:m-auto max-w-350">
        <div className="h-[8em] aspect-1/1 rounded-full overflow-hidden">
          <img src="/profile.jpeg" alt="profile-icon" />
        </div>

        <h1 className="text-2xl font-bold my-5 z-2">
          Hi. I&apos;m <span className="text-gradient">Tafara.</span>
        </h1>

        <div className="flex flex-row gap-3 z-2">
          <Tag>Landing Pages</Tag>
          <Tag>Websites</Tag>
          <Tag>Web Apps</Tag>
          <Tag>UI/UX Design</Tag>
        </div>

        <div>
          <p className="w-1/2 text-lg leading-6 mt-15 mb-7 max-w-100 z-2">
            I make professional websites to help you build a stronger online
            brand presence and build customer trust online.
          </p>
          <img
            className="sm:absolute -top-15 -right-15 lg:-top-15 xl:right-50 xl:top-0 2xl:right-40 2xl:top-0 max-w-200 w-[85%] z-1"
            src="/cutout.png"
            alt="A photo of me"
          />
        </div>

        <div className="flex flex-row gap-2 z-2">
          <ClearButton className="">
            <p className="text-gradient text-lg font-medium my-1">Portfolio</p>
          </ClearButton>

          <ClearButton>
            <p className="text-lg font-medium my-1">Contact Me</p>
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default Hero;
