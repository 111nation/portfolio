"use client";
import { useRouter } from "next/navigation";
import ClearButton from "./ClearButton";
import Tag from "./Tag";
import Link from "next/link";

function Hero() {
  const router = useRouter();

  return (
    <div className="bg-foreground-50 border-1 border-foreground-200 my-3 mx-0 sm:mx-4 lg:my-5 lg:mx-10 sm:rounded-xl px-4 sm:px-10 py-8 xl:py-20 xl:px-25 2xl:mx-auto relative block lg:m-auto max-w-350">
      <img
        className="h-[10em] m-auto sm:mx-0 sm:h-[8em] aspect-1/1 rounded-full overflow-hidden relative"
        src="/profile.png"
        alt="profile-icon"
      />

      <h1 className="text-3xl font-bold text-center sm:text-left my-5 z-2">
        Hi. I&apos;m <span className="text-gradient">Tafara.</span>
      </h1>

      <div className="flex flex-wrap sm:flex-row justify-center sm:justify-start  gap-2 sm:gap-3 z-2 wrap">
        <Tag>Landing Pages</Tag>
        <Tag>Websites</Tag>
        <Tag>Web Apps</Tag>
        <Tag>UI/UX Design</Tag>
      </div>

      <div>
        <p className="sm:w-1/2 leading-7.5 text-center sm:text-left sm:text-lg sm:leading-6 mt-6 sm:mt-15 mb-7 sm:max-w-100 z-2">
          I make professional websites to help you build a stronger online brand
          presence and build customer trust online.
        </p>
      </div>

      <div className="flex flex-row justify-center sm:justify-start gap-4 sm:gap-2 z-2">
        <Link href="/portfolio" target="_blank">
          <ClearButton className="px-7 py-1 sm:px-4 cursor-pointer">
            <p className="text-gradient text-xl sm:text-lg font-medium my-1">
              Portfolio
            </p>
          </ClearButton>
        </Link>

        <ClearButton
          className="px-4 cursor-pointer z-5"
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        >
          <p className="text-xl sm:text-lg font-medium my-1">Contact Me</p>
        </ClearButton>
      </div>
      <img
        className="hidden md:block sm:absolute -top-15 -right-15 lg:-top-15 xl:right-50 xl:top-0 2xl:right-40 2xl:top-0 max-w-200 w-[85%] z-1"
        src="/cutout.png"
        alt="A photo of me"
      />
    </div>
  );
}

export default Hero;
