import { Experience } from "@/types/Portfolio.types";
import Link from "next/link";
import DiamondIcon from "@/components/icons/DiamondIcon";
import SVGIcon from "@/components/icons/SVGIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import SandClockIcon from "@/components/icons/SandClockIcon";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}
const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } relative items-center w-full my-2`}
    >
      <div className="flex-1 hidden lg:flex"></div>
      <div className="hidden lg:inline p-3 bg-main rounded">
        <SVGIcon icon={DiamondIcon} size={20} />
      </div>
      <section className="flex flex-col flex-1 items-stretch">
        <Link
          href={`/experiences/${exp.company}/${exp.designation}`}
          className="mb-5 relative inline-flex flex-col border border-border rounded-2xl"
        >
          <div className="p-6 flex flex-col flex-1">
            <div className=" flex flex-col items-start gap-5 md:gap-1 md:flex-row">
              <div>image</div>
              <div className="flex flex-col ml-0 md:ml-5 gap-3 w-full">
                <h3 className="flex flex-col text-lg font-bold tracking-wide my-1 sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-start lg:items-center justify-between sm:gap-5 md:gap-0 ">
                  {exp.designation}
                </h3>
                <div className="flex flex-row flex-wrap mb-2 gap-1 text-sm font-light">
                  <div
                    className="p-2 has-tooltip relative flex flex-row items-center justify-center border rounded-lg border-border cursor-context-menu mr-1 mb-1 hover:border-border-hover"
                    data-help="Company: Self-employed"
                  >
                    <div className="tooltip w-max rounded-lg shadow-lg p-1 bg-secondary -mt-16">
                      <span className="font-semibold">Company:</span>{" "}
                      {exp.company}
                    </div>
                    <SVGIcon icon={BuildingIcon} size={16} />
                  </div>
                  <div
                    className="p-2 has-tooltip relative flex flex-row items-center justify-center border rounded-lg border-border cursor-context-menu mr-1 mb-1 hover:border-border-hover"
                    data-help="Company: Self-employed"
                  >
                    <div className="tooltip w-max rounded-lg shadow-lg p-1 bg-secondary -mt-16">
                      <span className="font-semibold">Location:</span> Dhaka
                    </div>
                    <SVGIcon icon={LocationIcon} size={16} />
                  </div>
                  <div
                    className="p-2 has-tooltip relative flex flex-row items-center justify-center border rounded-lg border-border cursor-context-menu mr-1 mb-1 hover:border-border-hover"
                    data-help="Company: Self-employed"
                  >
                    <div className="tooltip w-max rounded-lg shadow-lg p-1 bg-secondary -mt-16">
                      <span className="font-semibold">Contract:</span> Fulltime
                    </div>
                    <SVGIcon icon={SandClockIcon} size={16} />
                  </div>
                </div>
                <div className="text-accent-text text-sm font-extralight">
                  {exp.starts} - {exp.ends}
                </div>
                <div className=" tracking-normal">
                  Creating awesome tools for developers.
                </div>
                <div className="flex flex-row flex-wrap mt-5">icons</div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default ExperienceCard;
