import { ReactNode } from "react";
import { Email, GitHub, LinkedIn, X } from "../assets/icons";

interface SocialProp {
  children?: ReactNode;
  href?: string;
}

const Social = (props: SocialProp) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className="aspect-1/1 overflow-hidden border-1 border-foreground-50 rounded-full bg-[rgba(217,217,217,0.06)] hover:scale-102 duration-104 ease-out"
    >
      {props.children}
    </a>
  );
};

function Contact() {
  return (
    <div className="border-t-1 border-foreground-100 w-[90%] max-w-300 m-auto mb-10">
      <h2 className="heading text-center mt-10 mb-5">
        Ready To <span className="text-gradient">Elevate Your Business?</span>
      </h2>
      <p className="text-center sm:w-[50%] m-auto mb-5">
        Join the elite businesses who built customer trust and their online
        presence.
      </p>

      <div className="w-[70%] sm:w-[30%] mx-auto max-w-70 grid grid-cols-4 gap-5 my-5 lg:my-10">
        <Social href="https://www.linkedin.com/in/tafara111/">
          <LinkedIn className="scale-50" />
        </Social>
        <Social href="https://x.com/111nation">
          <X className="scale-55" />
        </Social>
        <Social href="https://github.com/111nation">
          <GitHub className="scale-70" />
        </Social>
        <Social href="mailto:tafara.k@outlook.com">
          <Email className="scale-80" />
        </Social>
      </div>

      <a href="mailto:tafara.k@outlook.com">
        <p className="text-center underline">tafara.k@outlook.com</p>
      </a>
    </div>
  );
}

export default Contact;
