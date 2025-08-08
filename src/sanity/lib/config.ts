import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "@/sanity/lib/api";
import { SINGLETON_TYPES } from "./constants";
import { structure } from "../studio/structure";
import { schemaTypes } from "../schemas";
import { inlineSvgInput } from "@focus-reactive/sanity-plugin-inline-svg-input";
import { defineDocuments, presentationTool } from "sanity/presentation";
import { locations } from "../studio/locations";

export const config = defineConfig({
  basePath: "/dashboard",
  projectId,
  dataset,
  plugins: [
    structureTool({
      title: "Content",
      structure,
    }),
    presentationTool({
      title: "Presentation",
      previewUrl: {
        previewMode: {
          enable: "/api/preview/enable",
        },
      },
      resolve: {
        locations,
        mainDocuments: defineDocuments([
          {
            route: "/:slug",
            filter: "_type == 'page' && slug.current == $slug",
          },
          {
            route: "/posts/:slug",
            filter: "_type == 'post' && slug.current == $slug",
          },
          {
            route: "/",
            filter: "_type == 'frontPage'",
          },
        ]),
      },
    }),
    inlineSvgInput(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
