"use client";
import { notFound, useRouter } from "next/navigation";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { PortFolio } from "@/types/Portfolio.types";
import { createDataAttribute } from "@sanity/visual-editing/react";
import Header from "../templates/header";
import Hero from "../templates/hero";
import EducationCard from "../molecules/EducationCard";
import { Fragment } from "react";
import PageTitle from "../molecules/PageTitle";
import Skills from "../templates/Skills";
export enum PageType {
  EDUCATION = "education",
  WORK = "work",
  PROJECTS = "projects",
  SKILLS = "skills",
  HOME = "",
}
type PageBuilderProps = {
  documentId: string;
  documentType: string;
  pageSlug: PageType;
  content: PortFolio;
};

const PageBuilder = ({
  documentId,
  documentType,
  content,
  pageSlug,
}: PageBuilderProps) => {
  const router = useRouter();

  const { about, education, image, name, navbar, skills } = content;
  console.log({ pageSlug });
  const contentData =
    pageSlug === PageType.HOME
      ? content
      : (content as unknown as Record<PageType, unknown>)[pageSlug];

  console.log({ contentData, c: !contentData });
  if (!contentData) {
    router.replace("/not-found");
    return;
  }
  const renderContent = (pageType: PageType) => {
    switch (pageType) {
      case PageType.EDUCATION:
        return (
          <div className="flex flex-col flex-1 p-0 w-full lg:max-w-screen-lg xl:max-w-5xl mx-auto">
            <div className="flex flex-col items-center relative mt-10 flex-1">
              <div className=" w-px hidden lg:flex top-0 bottom-0 py-12 bg-border absolute rounded"></div>
              {education?.map((edu, index) => (
                <EducationCard key={edu.starts} edu={edu} index={index} />
              ))}
            </div>
          </div>
        );
      case PageType.SKILLS:
        return (
          <Fragment>
            <PageTitle name="Skills" className="text-center pt-8 md:pt-16" />
            <Skills skills={skills} />
          </Fragment>
        );

      default:
        return (
          <Hero
            about={about}
            name={name}
            image={image}
            socials={navbar.socials}
          />
        );
    }
  };
  return (
    <div
      data-sanity={createDataAttribute({
        id: documentId,
        baseUrl: studioUrl,
        projectId: projectId,
        dataset: dataset,
        type: documentType,
        path: "pageBuilder",
      }).toString()}
    >
      <Header navbar={navbar} name={name} />
      {renderContent(pageSlug)}
    </div>
  );
};

export default PageBuilder;
