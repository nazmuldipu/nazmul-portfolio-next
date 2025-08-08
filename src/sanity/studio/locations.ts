import {
  defineLocations,
  DocumentLocationResolvers,
} from "sanity/presentation";

export const locations: DocumentLocationResolvers = {
  frontPage: defineLocations({
    select: {},
    resolve: () => {
      return {
        message: "Preview of front page",
        locations: [
          {
            title: "Front",
            href: "/",
          },
        ],
      };
    },
  }),
  post: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => {
      if (!doc?.slug) {
        return undefined;
      }

      return {
        message: "Preview of article",
        locations: [
          {
            title: doc.title,
            href: `/posts/${doc.slug}`,
          },
        ],
      };
    },
  }),
  page: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => {
      if (!doc?.slug) {
        return undefined;
      }

      return {
        message: "Preview of page",
        locations: [
          {
            title: doc.title,
            href: `/${doc.slug}`,
          },
        ],
      };
    },
  }),
  landingPage: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc) => {
      if (!doc?.slug) {
        return undefined;
      }

      return {
        message: "Preview of landing page",
        locations: [
          {
            title: doc.title,
            href: `/${doc.slug}`,
          },
        ],
      };
    },
  }),
  siteSettings: defineLocations({
    select: {},
    resolve: () => {
      return {
        message: "Forhåndsvisning av globale innstillinger",
        locations: [
          {
            title: "Forside",
            href: "/",
          },
        ],
      };
    },
  }),
  archivePage: defineLocations({
    select: {
      title: "title",
    },
    resolve: (doc) => {
      return {
        message: "Forhåndsvisning av blogg",
        locations: [
          {
            title: doc?.title,
            href: `/blog`,
          },
        ],
      };
    },
  }),
};
