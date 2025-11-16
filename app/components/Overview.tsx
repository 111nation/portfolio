import { ReactNode } from "react";
import { Bag, Book } from "../assets/icons";

interface SectionProps {
  heading?: string;
  children?: ReactNode;
  icon?: React.ElementType;
}

const Section = (props: SectionProps) => {
  const Icon = props.icon;
  return (
    <div className="flex flex-row border-1 border-foreground-100 bg-[rgba(217,217,217,0.05)] text-[rgba(254,254,255,0.43)] rounded-full px-10 py-4 items-center justify-center gap-3">
      {Icon && <Icon className="max-w-15"></Icon>}
      <div>
        <h3 className="text-xl font-bold font-inter text-gradient">
          {props.heading}
        </h3>
        <p className="text-sm">{props.children}</p>
      </div>
    </div>
  );
};

function Overview() {
  return (
    <div className="grid grid-cols-2 m-auto mt-20 px-15 gap-5 grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_1.2fr] max-w-320 items-center">
      <div className="h-full flex flex-col justify-evenly py-10 xl:px-10">
        <h2 className="heading">
          Build{" "}
          <span className="text-gradient text-nowrap">Customer Trust</span>
        </h2>

        <p>
          A bad website can break your brand, but a good website can elevate it.
          Good websites show your expertise and testimonials. Good websites also
          look good and provide value.{" "}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Section heading="Landing Pages" icon={Book}>
          A bad website can break your brand, but a good website can elevate it.
          Good websites show your expertise and testimonials. Good websites also
          look good and provide value.
        </Section>

        <Section heading="Professional Websites" icon={Bag}>
          Want to show off your products and brand for potential customers and
          investors? Generate more leads with a custom professionally made
          website.
        </Section>
      </div>
    </div>
  );
}

export default Overview;
