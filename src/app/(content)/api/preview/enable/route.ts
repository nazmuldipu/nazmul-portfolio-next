import { apiVersion } from "@/sanity/lib/api";
import { client } from "@/sanity/lib/client";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    apiVersion,
    token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN,
    useCdn: false, // Ensure fresh data in preview mode
  }),
});
