import { About } from "@/types/Portfolio.types";
import SanityImage from "../molecules/SanityImage";
import { Divider } from "@nextui-org/react";

interface HeroProps {
  name: string;
  about: About;
  image: any;
}
const Hero = ({ name, about, image }: HeroProps) => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 py-8 lg:gap-4 max-w-5xl mx-auto p-4">
      <div className="flex-1 sm:max-w-64 lg:max-w-96 xl:max-w-full self-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{name}</h2>
        <Divider className="bg-primary w-28 h-0.5 my-2" />
      </div>
      <div className="relative min-h-44 w-32 sm:w-52 sm:min-h-72 md:w-72 md:min-h-[403px] xl:w-80 xl:min-h-[448px] justify-self-end">
        <div className="absolute h-28 sm:h-44 md:h-60 w-full bottom-8 sm:bottom-12 md:bottom-20 xl:bottom-28 bg-primary rounded-t-full" />
        <SanityImage
          alt="Nazmul Alam's Image"
          asset={image.asset}
          className="absolute"
          maxWidth={350}
        />
      </div>
      <div className="py-4 col-span-2 lg:col-span-1 self-center">
        <h3 className=" text-lg sm:text-2xl font-normal">{about.title}</h3>
        <p className="py-4 font-light text-justify">{about.subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
