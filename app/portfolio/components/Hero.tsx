import Tag from "@/app/components/Tag";
import { ReactNode } from "react";

interface SkillProp {
  children?: ReactNode;
  alt?: string;
  src?: string;
}

const Skill = (props: SkillProp) => {
  return (
    <Tag className="py-1.5 pl-4 pr-3.5 cursor-pointer active:scale-101 hover:scale-101 ease-out duration-200">
      <img
        className="h-[1.6em] aspect-1/1 mr-3 rounded-xs"
        src={props.src}
        alt={props.alt}
      />
      <p className="text-base font-medium">{props.children}</p>
    </Tag>
  );
};

function PortfolioHero() {
  return (
    <div className="bg-foreground-50 border-1 border-foreground-200 my-3 mx-0 sm:mx-4 lg:my-5 lg:mx-10 sm:rounded-xl px-4 sm:px-10 py-8 xl:py-20 xl:px-25 2xl:mx-auto relative block lg:m-auto mx-auto max-w-350">
      <h1 className="heading text-center">
        My <span className="text-gradient">Portfolio</span>
      </h1>

      <p className="font-bold text-center text-xl mt-15">
        For the Nerds: <span className="text-gradient">My Skills</span>
      </p>

      <p className="text-center mt-5 sm:w-[60%] sm:mx-auto sm:max-w-120">
        Here is the following languages and frameworks I use when developing
        sites. I use Figma for design and I use AI responsibly to speed up my
        workflow.
      </p>

      <div className="flex flex-row flex-wrap gap-2 justify-center mt-5 sm:w-[90%] sm:max-w-150 sm:mx-auto">
        <Skill src="languages/javascript.png">JavaScript</Skill>
        <Skill src="languages/typescript.png">TypeScript</Skill>
        <Skill src="languages/tailwind.png">Tailwind</Skill>
        <Skill src="languages/nextjs.jpeg">Next.js</Skill>
        <Skill src="languages/firebase.png">FireBase</Skill>
        <Skill src="languages/react.png">React.js</Skill>
        <Skill src="languages/html.png">HTML</Skill>
        <Skill src="languages/css.png">CSS</Skill>
      </div>
    </div>
  );
}

export default PortfolioHero;
