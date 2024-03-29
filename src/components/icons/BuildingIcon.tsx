import React from "react";

interface Props {
  [key: string]: any;
}

export default function BuildingIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `fill-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M28 2H16a2.002 2.002 0 0 0-2 2v10H4a2.002 2.002 0 0 0-2 2v14h28V4a2.002 2.002 0 0 0-2-2ZM9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"
      ></path>

      <path
        className={pathClassName ? `fill-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2z"
      ></path>
    </svg>
  );
}
