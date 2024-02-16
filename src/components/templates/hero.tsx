import { About, Socials } from "@/types/Portfolio.types";
import SanityImage from "../molecules/SanityImage";
import { Divider } from "@nextui-org/react";
import SVGIcon from "@/components/icons/SVGIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import EmailAtIcon from "@/components/icons/EmailAtIcon";

interface HeroProps {
  name: string;
  about: About;
  image: any;
  socials: Socials[];
}
const Hero = ({ name, about, image, socials }: HeroProps) => {
  const getSocialIcon = (slug: string) => {
    switch (slug) {
      case "github":
        return (
          <SVGIcon
            icon={GithubIcon}
            size={20}
            pathClassName="text-secondary-text"
          />
        );
      case "linkedin":
        return (
          <SVGIcon
            icon={LinkedinIcon}
            size={20}
            pathClassName="text-secondary-text"
          />
        );
      case "email":
        return (
          <SVGIcon
            icon={EmailAtIcon}
            size={20}
            pathClassName="text-secondary-text"
          />
        );
      default:
        return (
          <SVGIcon
            icon={GithubIcon}
            size={20}
            pathClassName="text-secondary-text"
          />
        );
    }
  };
  return (
    <section className="flex flex-col flex-1 p-0 w-full xl:max-w-5xl lg:max-w-screen-md mx-auto">
      <div className="flex gap-4 self-center flex-1 flex-col md:flex-row md:slef-stretch justify-center lg:justify-between items-center py-0 px-2 md:px-5">
        <div className="md:flex-0.5 md:order-2">
          <div className="relative w-52 min-h-72 md:w-64 md:min-h-[403px] xl:w-80 xl:min-h-[448px] justify-self-end">
            <div className="absolute h-36 sm:h-44 md:h-60 w-full bottom-20 sm:bottom-12 md:bottom-20 xl:bottom-28 bg-main-hover rounded-t-full" />
            <SanityImage
              alt="Nazmul Alam's Image"
              asset={image.asset}
              className="absolute"
              maxWidth={350}
            />
          </div>
        </div>
        <div className="md:flex-1">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-wider text-center md:text-left font-black pb-4">
            {name}
          </h1>
          <p className="text-center md:text-left font-extralight text-base md:text-xl text-tertiary-text">
            {about.subtitle}
          </p>
          <div className=" flex flex-row justify-center md:justify-start py-4 px-0 gap-2">
            {socials.map((social, index) => (
              <Link key={`${social.name}-${index}`} href={social.href}>
                {getSocialIcon(social.slug)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    // <section className="grid grid-cols-2 lg:grid-cols-3 py-8 lg:gap-4 max-w-5xl mx-auto p-4">
    //   <div className="flex-1 sm:max-w-64 lg:max-w-96 xl:max-w-full self-center">
    //     <h2 className="text-3xl sm:text-4xl font-bold">{name}</h2>
    //     <Divider className="bg-primary w-28 h-0.5 my-2" />
    //   </div>
    //   <div className="relative min-h-44 w-32 sm:w-52 sm:min-h-72 md:w-72 md:min-h-[403px] xl:w-80 xl:min-h-[448px] justify-self-end">
    //     <div className="absolute h-28 sm:h-44 md:h-60 w-full bottom-8 sm:bottom-12 md:bottom-20 xl:bottom-28 bg-primary rounded-t-full" />
    //     <SanityImage
    //       alt="Nazmul Alam's Image"
    //       asset={image.asset}
    //       className="absolute"
    //       maxWidth={350}
    //     />
    //   </div>
    //   <div className="py-4 col-span-2 lg:col-span-1 self-center">
    //     <h3 className=" text-lg sm:text-2xl font-normal">{about.title}</h3>
    //     <p className="py-4 font-light text-justify">{about.subtitle}</p>
    //   </div>
    // </section>
  );
};

export default Hero;
