import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto grid h-full min-h-dvh max-w place-items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-foreground">
          404 - Not Found
        </h1>
        <div className="mx-auto mt-8 w-fit">
          {/* go back to home */}
          <Link href="/">Go back to home</Link>
        </div>
      </div>
    </div>
  );
}
