import PageTitle from "@/components/molecules/PageTitle";
import Header from "@/components/templates/header";
import { getExperiencesData } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

const ProjectsPage = async () => {
  const data = await getExperiencesData();

  const { experience, navbar, name } = formatSanityData(data);
  return (
    <main className="flex flex-col min-h-screen font-primary pb-12 px-4">
      <Header navbar={navbar} name={name} />
      <PageTitle name="Projects" className="text-center pt-8 md:pt-16" />
    </main>
  );
};

export default ProjectsPage;
