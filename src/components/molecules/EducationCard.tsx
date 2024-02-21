import { PortableText } from "@portabletext/react";

import { Education } from "@/types/Portfolio.types";
import SVGIcon from "@/components/icons/SVGIcon";
import DiamondIcon from "@/components/icons/DiamondIcon";
import SanityImage from "./SanityImage";

interface ExperienceCardProps {
  edu: Education;
  index: number;
}
const EducationCard = ({ edu, index }: ExperienceCardProps) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row-reverse" : "flex-row"
      } relative items-center w-full my-2 justify-center`}
    >
      <div className="flex-1 hidden lg:flex"></div>
      <div className="hidden lg:inline p-3 bg-main rounded">
        <SVGIcon icon={DiamondIcon} size={20} />
      </div>
      <section className="flex flex-col flex-1 items-stretch max-w-lg">
        <div className="mb-5 p-6 relative inline-flex flex-col border border-border rounded-2xl">
          <div className="w-16 my-2">
            <SanityImage
              alt={`${edu.academy} image`}
              asset={edu.academyLogo.asset}
              className="w-16"
              imageSizes={[128]}
              maxWidth={64}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 items-stretch">
            <div className=" text-xl">{edu.degree}</div>
            <div className="">{edu.academy}</div>
            <div className="text-accent-text text-sm font-extralight">
              {edu.starts} - {edu.ends}
            </div>
            <div className="text-xs md:text-sm font-light">
              <PortableText value={edu.major} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationCard;
