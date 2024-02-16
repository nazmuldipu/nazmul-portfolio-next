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
    <main className="flex flex-col min-h-screen font-primary">
      <Header navbar={fd.navbar} name={fd.name} />
      <Hero
        about={fd.about}
        name={fd.name}
        image={fd.image}
        socials={fd.navbar.socials}
      />
      {/* <SkillsAndExperience
        experience={fd.experience}
        skills={fd.skills}
        headline={fd.headline}
      /> */}
      {/* {JSON.stringify(fd)} */}
    </main>
  );
}
