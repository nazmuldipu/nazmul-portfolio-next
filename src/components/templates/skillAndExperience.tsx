import { Experience, Skills } from "@/types/Portfolio.types";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface SkillsAndExperienceProps {
  experience: Experience[];
  skills: Skills[];
  headline: PortableTextBlock[];
}
const SkillsAndExperience = ({
  experience,
  skills,
  headline,
}: SkillsAndExperienceProps) => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto border p-4 md:p-8">
        <h2 className=" text-3xl ">Skills & Experience</h2>
        <div className="py-2 text-text-secondary text-justify">
          <PortableText value={headline} />
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <h3 className="relative pt-6">
              <span className="text-2xl">Skills</span>
              <hr
                className="shrink-0 border-none bg-primary w-10 h-0.5 my-2"
                role="separator"
              />
            </h3>
            {skills.map((skill, index) => {
              return (
                <div key={index} className=" text-justify py-2">
                  <h4 className=" font-semibold text-lg text-text-secondary">
                    {skill.level}
                  </h4>
                  <div className="pl-4 text-text-primary">
                    <PortableText value={skill.skill} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-3">
            <h3 className="relative pt-6">
              <span className="text-2xl">Experience</span>
              <hr
                className="shrink-0 border-none bg-primary w-10 h-0.5 my-2"
                role="separator"
              />
            </h3>
            <div>
              {experience.map((exp, index) => {
                return (
                  <div
                    className="grid gap-2 md:gap-4 grid-cols-2 pb-4"
                    key={index}
                  >
                    <div>
                      <span className="px-2 py-1 text-sm bg-slate-200 text-primary rounded-md">
                        {exp.starts} - {exp.ends}
                      </span>
                    </div>
                    <div className=" text-text-primary">
                      <h4 className="font-semibold text-base md:text-lg ">
                        {exp.designation}
                      </h4>
                      <p className=" text-sm md:text-base">{exp.company}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div>Skills: {JSON.stringify(skills)}</div> */}
      {/* <div>Title: {JSON.stringify(headline)}</div> */}
    </section>
  );
};

export default SkillsAndExperience;
