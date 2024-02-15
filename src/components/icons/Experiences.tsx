import React from "react";

interface Props {
  [key: string]: any;
}

export default function ExperiencesIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M8 4v4H4V4h4M2 2v8h8V2zm16 5v4h-4V7h4m-6-2v8h8V5zM8 16v4H4v-4h4m-6-2v8h8v-8z"
      ></path>

      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"
      ></path>
    </svg>
  );
}
