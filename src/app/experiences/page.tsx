import ExperienceCard from "@/components/molecules/ExperienceCard";
import PageTitle from "@/components/molecules/PageTitle";
import Header from "@/components/templates/header";
import { getExperiencesData, getSkillsData } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

const ExperiencesPage = async () => {
  const data = await getExperiencesData();

  const { experience, navbar, name } = formatSanityData(data);

  return (
    <main className="flex flex-col min-h-screen font-primary">
      <Header navbar={navbar} name={name} />
      <PageTitle name="Experiences" className="text-center pt-8 md:pt-16" />
      <div className="flex flex-col items-center relative mt-10 flex-1">
        <div className=" w-px hidden lg:flex top-0 bottom-0 py-12 bg-border absolute rounded"></div>
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.starts} exp={exp} index={index} />
        ))}
      </div>
      {/* {JSON.stringify(experience)} */}
    </main>
  );
};

export default ExperiencesPage;
