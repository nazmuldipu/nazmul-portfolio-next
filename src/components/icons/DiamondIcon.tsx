import React from "react";

interface Props {
  [key: string]: any;
}

export default function DiamondIcon(props: Props): JSX.Element {
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
        d="m8 16l8-8l8 8l-8 8z"
      ></path>

      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M29.39 14.527L17.474 2.609a2.085 2.085 0 0 0-2.946 0L2.609 14.527a2.085 2.085 0 0 0 0 2.946l11.918 11.918a2.085 2.085 0 0 0 2.946 0l11.918-11.918a2.085 2.085 0 0 0 0-2.946ZM16 28.036L3.965 16L16 3.964L28.036 16Z"
      ></path>
    </svg>
  );
}
