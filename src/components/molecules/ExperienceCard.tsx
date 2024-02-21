import { Experience } from "@/types/Portfolio.types";
import Link from "next/link";
import DiamondIcon from "@/components/icons/DiamondIcon";
import SVGIcon from "@/components/icons/SVGIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import SandClockIcon from "@/components/icons/SandClockIcon";
import NoImageIcon from "@/components/icons/NoImageIcon";
import Image from "next/image";
import SanityImage from "./SanityImage";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}
const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const TooltipElement = ({ children, tooltip }: any) => {
    return (
      <div
        className="p-2 has-tooltip relative flex flex-row items-center justify-center border rounded-lg border-border cursor-context-menu mr-1 mb-1 hover:border-border-hover"
        data-help="Company: Self-employed"
      >
        <div className="tooltip w-max rounded-lg shadow-lg p-1 bg-secondary mt-16">
          <span className=" font-light text-base">{tooltip}</span>
        </div>
        {children}
      </div>
    );
  };

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
        <Link
          href={`/experiences/${exp.slug}`}
          className="mb-5 relative inline-flex flex-col border border-border rounded-2xl"
        >
          <div className="p-6 flex flex-col flex-1">
            <div className="flex flex-col items-start gap-5 md:gap-1 md:flex-row">
              <div className="w-12 flex-shrink-0">
                <SanityImage
                  alt={`${exp.company} image`}
                  asset={exp.companyLogo.asset}
                  className="w-12 flex-shrink-0"
                  imageSizes={[48, 64]}
                  maxWidth={48}
                />
              </div>
              <div className="flex flex-col ml-0 md:ml-5 gap-3 w-full">
                <h3 className="flex flex-col text-lg font-bold tracking-wide my-1 sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between sm:gap-5 md:gap-0 ">
                  {exp.designation}
                </h3>
                <div className="flex flex-row flex-wrap mb-2 gap-1 text-sm font-light">
                  <TooltipElement tooltip={`Company: ${exp.company}`}>
                    <SVGIcon icon={BuildingIcon} size={16} />
                  </TooltipElement>
                  <TooltipElement tooltip="Location: Dhaka">
                    <SVGIcon icon={LocationIcon} size={16} />
                  </TooltipElement>
                  <TooltipElement tooltip="Contract: Fulltime">
                    <SVGIcon icon={SandClockIcon} size={16} />
                  </TooltipElement>
                </div>
                <div className="text-accent-text text-sm font-extralight">
                  {exp.starts} - {exp.ends}
                </div>
                <div className=" tracking-normal">
                  Creating awesome tools for developers.
                </div>
                <div className="flex flex-row flex-wrap mt-5 gap-1">
                  {exp.technologies.map((tech, index) => (
                    <div key={tech.name}>
                      <TooltipElement tooltip={tech.name}>
                        <Image
                          src={`data:image/svg+xml;base64,${btoa(tech.logo)}`}
                          alt=""
                          width={20}
                          height={20}
                        />
                      </TooltipElement>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ExperienceCard;
