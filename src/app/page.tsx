"use server";
import Header from "@/components/templates/header";
import { getProfile } from "@/sanity/lib/queries";
import { formatSanityData } from "@/utils/utils";

export default async function Home() {
  const data = await getProfile();

  const fd = formatSanityData(data);

  return (
    <main className="bg-light">
      <Header navbar={fd.navbar} />
      Home page
    </main>
  );
}
