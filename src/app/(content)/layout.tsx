import { Fragment } from "react";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isDraftMode = (await draftMode()).isEnabled;
  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="top"
        className={`min-h-screen max-w-[100vw] overflow-x-clip bg-background text-foreground antialiased [font-family:var(--font-sans)]`}
      >
        <main>{children}</main>
        {isDraftMode && (
          <Fragment>
            <VisualEditing />
          </Fragment>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
