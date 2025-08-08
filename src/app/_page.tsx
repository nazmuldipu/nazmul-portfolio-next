"use server";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import { getHomePageData } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

export default async function Home() {
  const data = await getHomePageData();

  const { about, image, name, navbar } = formatSanityData(data);
  return (
    <main className="flex flex-col min-h-screen font-primary">
      <Header navbar={navbar} name={name} />
      <Hero about={about} name={name} image={image} socials={navbar.socials} />
    </main>
  );
}
