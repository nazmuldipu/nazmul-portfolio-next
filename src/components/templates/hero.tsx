import { About, Socials } from "@/types/Portfolio.types";
import SanityImage from "../molecules/SanityImage";
import SVGIcon from "@/components/icons/SVGIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import EmailAtIcon from "@/components/icons/EmailAtIcon";
import PageTitle from "@/components/molecules/PageTitle";

interface HeroProps {
  name: string;
  about: About;
  image: any;
  socials: Socials[];
}

const getSocialIcon = (slug: string) => {
  let icon;
  switch (slug) {
    case "github":
      icon = GithubIcon;
      break;
    case "linkedin":
      icon = LinkedinIcon;
      break;
    case "email":
      icon = EmailAtIcon;
      break;
    default:
      icon = GithubIcon;
      break;
  }

  return <SVGIcon icon={icon} size={20} pathClassName="text-secondary-text" />;
};

const Hero = ({ name, about, image, socials }: HeroProps) => {
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
          <PageTitle name={name} className="text-center md:text-left" />
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
  );
};

export default Hero;
