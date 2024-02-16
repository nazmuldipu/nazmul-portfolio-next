const PageTitle = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-wider ${className} font-black pb-4`}
    >
      {name}
    </h1>
  );
};

export default PageTitle;
