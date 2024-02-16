import PageTitle from "@/components/molecules/PageTitle";
import Header from "@/components/templates/header";
import { getSkillsData } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

const SkillsPage = async () => {
  const data = await getSkillsData();

  const { skills, navbar, name } = formatSanityData(data);

  return (
    <main className="flex flex-col min-h-screen font-primary">
      <Header navbar={navbar} name={name} />
      <PageTitle name="Skills" className="text-center pt-8 md:pt-16" />
      {/* {JSON.stringify(skills)} */}
    </main>
  );
};

export default SkillsPage;
