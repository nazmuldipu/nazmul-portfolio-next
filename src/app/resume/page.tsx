// import Header from "@/components/templates/header";
import Header from "@/components/templates/header";
import { getSocialIcon } from "@/components/utils/SocialIcons";
import { getProfile } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";
import { PortableText } from "@portabletext/react";

const ResumePage = async () => {
  const data = await getProfile();
  const { about, education, location, skills, experience, navbar, name } =
    formatSanityData(data);

  return (
    <main className="flex flex-col min-h-screen font-primary pb-12 bg-secondary">
      <Header navbar={navbar} name={name} className="" />
      <div className="page px-4">
        {/* Top header */}
        <section className="flex">
          <div className=" flex-1">
            <h2 className="font-light text-4xl tracking-wider">{name}</h2>
            <div className=" text-lg uppercase font-extralight tracking-wide pt-2">
              {about.title}
            </div>
          </div>
          <div className=" max-w-56 grid gap-2 font-light">
            {about.details.map((detail, index) => (
              <div key={detail.slug} className="flex gap-2 text-sm">
                <div className="pt-0.5 w-4 shrink-0">
                  {getSocialIcon(detail.slug, 16)}
                </div>
                {detail.value}
              </div>
            ))}
          </div>
        </section>

        {/* Content area */}
        <section className="grid grid-cols-5 gap-8 mt-10">
          <article className="col-span-2">
            {/* About me section */}
            <div>
              {getPageSectionTitle("About me")}

              <div className="font-light">{about.subtitle}</div>
            </div>
            <div>
              {getPageSectionTitle("Links")}
              <div className="grid gap-4">
                {navbar.socials.map((social, index) => {
                  if (social.slug === "email") {
                    return <span key={social.slug}></span>;
                  }
                  return (
                    <div key={social.slug} className="text-xs">
                      <h3 className=" font-semibold">{social.name}</h3>
                      <a href={social.href} target="_blank" rel="noreferrer">
                        {social.href}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Skills me section */}
            <div>
              {getPageSectionTitle("Skills")}

              {skills.map((skill, index) => (
                <div key={skill.level} className="grid gap-1 text-sm pb-2">
                  <h3 className=" font-normal text-base">{skill.level}</h3>
                  <div className=" font-light my-0">
                    {skill.technologies.map((t) => t.name).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="col-span-3">
            <div>
              {getPageSectionTitle("Education")}
              <div className="grid gap-4">
                {education.map((edu, index) => (
                  <div key={edu.academy} className="flex">
                    {getSidebar()}
                    <div className="flex flex-col pl-2">
                      <div className=" font-light tracking-wider">
                        {edu.degree}
                      </div>
                      <div className=" font-lighter tracking-wide py-2">
                        {edu.academy}
                      </div>
                      <p className="text-sm font-light">
                        {edu.starts} - {edu.ends}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience section */}
            <div>
              {getPageSectionTitle("Experience")}
              <div className="font-light grid gap-4">
                {experience.map((exp, index) => (
                  <div key={exp.company} className="experience flex">
                    {getSidebar()}
                    <div className="pl-2 text-sm">
                      <h4 className=" uppercase tracking-wider font-normal text-base">
                        {exp.designation}
                      </h4>
                      <div className=" font-extralight">
                        {exp.starts} - {exp.ends}
                      </div>
                      <h3 className="tracking-wider font-light">
                        {exp.company}
                      </h3>
                      <PortableText value={exp.roles} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

const getSidebar = () => {
  return (
    <div className="w-3 shrink-0 relative">
      <div className="absolute top-1 left-[6px] border-r border-accent-text w-0 h-full"></div>
      <div className="absolute top-1 left-0 border border-accent-text w-3 h-3 rounded-full bg-main"></div>
      <div className="absolute top-2 left-1 w-0 h-0 border-2 border-accent-text rounded-full "></div>
    </div>
  );
};
const getPageSectionTitle = (title: string) => {
  return (
    <div className="w-full border-b border-tertiary-text mt-8 mb-4">
      <h3 className=" uppercase font-medium tracking-widest text-xl">
        {title}
      </h3>
    </div>
  );
};

export default ResumePage;
