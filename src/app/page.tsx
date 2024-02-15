"use server";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import SkillsAndExperience from "@/components/templates/skillAndExperience";
import { getProfile } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

export default async function Home() {
  const data = await getProfile();

  const fd = formatSanityData(data);
  return (
    <main className="font-primary">
      <Header navbar={fd.navbar} />
      <Hero about={fd.about} name={fd.name} image={fd.image} />
      <SkillsAndExperience
        experience={fd.experience}
        skills={fd.skills}
        headline={fd.headline}
      />
      {/* {JSON.stringify(fd)} */}
    </main>
  );
}
