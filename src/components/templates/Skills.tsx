import { Skills } from "@/types/Portfolio.types";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

interface SkillsProps {
  skills: Skills[];
}
const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="flex flex-col flex-1 p-0 w-full xl:max-w-5xl lg:max-w-screen-md mx-auto px-4">
      <div className="grid mt-10 mb-24">
        {skills.map((skill, index) => {
          return (
            <div key={skill.level} className=" border-dotted">
              <h3 className="text-lg sm:text-2xl md:text-2xl lg:text-4xl tracking-wider font-semibold py-2">
                {skill.level}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-6 mb-10 hover:border-">
                {skill.technologies.map((technology, index) => {
                  return (
                    <div
                      key={index}
                      className="relative flex justify-between items-center border border-border rounded-xl cursor-pointer hover:border-border-hover hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
                    >
                      <h4 className="flex-1 text-base sm:text-base lg:text-lg p-4 tracking-wider font-light">
                        {technology.name}
                      </h4>
                      {technology.logo && (
                        <div className="h-full">
                          <div className="absolute top-0 h-full right-0 w-1/3 rounded-r-xl bg-gradient-to-r from-main z-10" />

                          <Image
                            className=" absolute right-0 -top-4 h-24 w-24 rounded-r-xl"
                            src={`data:image/svg+xml;base64,${btoa(
                              technology.logo
                            )}`}
                            alt=""
                            width={96}
                            height={96}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
