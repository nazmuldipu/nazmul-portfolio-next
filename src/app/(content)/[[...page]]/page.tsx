import PageBuilder, { PageType } from "@/components/page/page-builder";
import {
  getEducationData,
  getHomePageData,
  getProfile,
} from "@/sanity/lib/queries";

const Page = async ({ params }: { params: Promise<{ page?: string[] }> }) => {
  const { page } = await params;
  const data = await getProfile();
  const documentId = data._id;
  const documentType = data._type;
  const pageSlug = (page?.join("/") || "") as PageType;

  return (
    <PageBuilder
      documentId={documentId}
      documentType={documentType}
      content={data}
      pageSlug={pageSlug}
    />
  );
};

export default Page;
