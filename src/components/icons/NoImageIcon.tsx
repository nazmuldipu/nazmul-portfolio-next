import React from "react";

interface Props {
  [key: string]: any;
}

export default function NoImageIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 128 128"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#38434f" d="M0 0h128v128H0z" />
      <path fill="#9db3c8" d="M48 16h64v112H48z" />
      <path fill="#788fa5" d="M16 80h32v48H16z" />
      <path fill="#56687a" d="M48 80h32v48H48z" />
    </svg>
  );
}
