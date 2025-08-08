import { JsonPreview, portfolioIcon } from "@/components/icons/iconComponents";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S: any) =>
  S.list()
    .title("Sites")
    .items([
      S.listItem()
        .title("Portfolio")
        .icon(portfolioIcon)
        .child((name: any) =>
          S.documentList()
            .title("Portfolio List")
            .filter('_type == "portfolio"')
            .params({ name })
        ),
    ]);

export const defaultDocumentNodeResolver = (S: any) =>
  S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
  ]);
