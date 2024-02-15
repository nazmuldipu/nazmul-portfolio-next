import React from "react";

interface Props {
  [key: string]: any;
}

export default function SkillsIcon(props: Props): JSX.Element {
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
        d="M24 21c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6c.5 0 1 .2 1.4.6l3 3c.4.4.6.9.6 1.4c0 .5-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6zm0-8l-3 3l3 3l3-3l-3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C11.2 9 11 8.5 11 8s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6c.5 0 1 .2 1.4.6l3 3c.4.4.6.9.6 1.4c0 -0.5-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6zm0-8l-3 3l3 3l3-3l-3-3zm0 24c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6c.5 0 1 .2 1.4.6l3 3c.4.4.6.9.6 1.4c0 .5-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6zm0-8l-3 3l3 3l3-3l-3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C3.2 17 3 16.5 3 16s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6c.5 0 1 .2 1.4.6l3 3c.4.4.6.9.6 1.4c0 .5-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6zm0-8l-3 3l3 3l3-3l-3-3z"
      ></path>
    </svg>
  );
}
