"use server";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import { getProfile } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

export default async function Home() {
  const data = await getProfile();

  const fd = formatSanityData(data);
  return (
    <main className="bg-light pt-5 px-5">
      <Header navbar={fd.navbar} />
      <Hero about={fd.about} name={fd.name} image={fd.image} />
      {/* {JSON.stringify(fd)} */}
    </main>
  );
}
