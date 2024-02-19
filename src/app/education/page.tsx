import EducationCard from "@/components/molecules/EducationCard";
import PageTitle from "@/components/molecules/PageTitle";
import Header from "@/components/templates/header";
import { getEducationData } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

const EducationPage = async () => {
  const data = await getEducationData();

  const { education, navbar, name } = formatSanityData(data);

  return (
    <main className="flex flex-col min-h-screen font-primary">
      <Header navbar={navbar} name={name} />
      <PageTitle name="Education" className="text-center pt-8 md:pt-16" />
      <div className="flex flex-col flex-1 p-0 w-full xl:max-w-5xl lg:max-w-screen-md mx-auto">
        <div className="flex flex-col items-center relative mt-10 flex-1">
          <div className=" w-px hidden lg:flex top-0 bottom-0 py-12 bg-border absolute rounded"></div>
          {education.map((edu, index) => (
            <EducationCard key={edu.starts} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default EducationPage;
