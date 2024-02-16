import React from "react";

interface Props {
  [key: string]: any;
}

export default function SandClockIcon(props: Props): JSX.Element {
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
        d="M15 19h2v2h-2zm0 4h2v2h-2z"
      ></path>

      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 0 0 .4 1.2L11.75 16L9.4 19.13a2 2 0 0 0-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 0 0-.4-1.2L20.25 16l2.35-3.13a2 2 0 0 0 .4-1.2ZM21 4v7H11V4Zm0 16.33V28H11v-7.67L14.25 16L12 13h8l-2.25 3Z"
      ></path>
    </svg>
  );
}
