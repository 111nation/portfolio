interface CardProps {
  children?: ReactNode;
  category?: string;
  src?: string;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`border-1 border-foreground-100 aspect-51/32 w-full rounded-xl relative hover:scale-102 duration-75 ease-in ${props.src ? "" : "bg-gradient"} overflow-hidden`}
    >
      {props.src && (
        <img
          className="h-[101%] min-w-[100%] opacity-44"
          alt={`Image of a ${props.category}`}
          src={props.src}
        />
      )}
      <p
        className={`absolute font-bold text-lg bottom-[1.5em] left-3 ${!props.src && "text-background"}`}
      >
        {props.children}
      </p>
      <p
        className={`absolute font-light text-sm bottom-[0.75em] left-3 ${!props.src ? "text-[rgba(30,30,30,0.7)]" : "text-[rgba(254,254,255,0.60)]"}`}
      >
        {props.category}
      </p>
    </div>
  );
};

function Spotlight() {
  return (
    <div>
      <h2 className="mt-25 text-center heading">
        My Recent <span className="text-gradient">Projects</span>
      </h2>

      <div className="w-full grid grid-cols-4 gap-2 lg:gap-10 px-7 my-7 max-w-300 mx-auto">
        <Card category="Web App" src="configvim-spotlight.png">
          Config.vim
        </Card>
        <Card category="Social Media App" src="youboard-spotlight.png">
          youboard.
        </Card>
        <Card category="E-commerce" src="simracing-spotlight.png">
          Sim Racing Wheels
        </Card>
        <Card category="View My Portfolio">View More</Card>
      </div>
    </div>
  );
}

export default Spotlight;
