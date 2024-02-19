import React from "react";

interface Props {
  [key: string]: any;
}

export default function NazmulSmIcon(props: Props): JSX.Element {
  const { pathClassName, ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 500 360"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName ? `stroke-current ${pathClassName}` : ""}
        fill="currentColor"
        d="M350.750 63.145 C 339.241 72.760,326.970 79.144,319.998 79.144 C 312.981 79.144,311.085 82.622,316.518 85.529 C 322.809 88.896,321.994 92.101,311.071 106.938 C 282.257 146.080,240.016 232.151,234.169 263.636 C 231.288 279.147,236.794 271.507,248.041 244.385 C 273.777 182.321,305.714 133.423,351.391 86.148 C 373.348 63.423,376.236 57.285,365.556 56.040 C 361.721 55.593,357.183 57.770,350.750 63.145 M137.013 81.505 C 124.763 86.398,96.257 115.551,96.257 123.187 C 96.257 128.289,101.557 126.532,105.305 120.187 C 127.874 81.981,149.195 86.772,168.863 134.467 L 175.307 150.092 162.288 173.976 C 104.718 279.594,43.850 326.654,43.850 265.545 C 43.850 239.118,52.412 224.817,85.561 195.874 C 98.831 184.287,91.728 182.611,75.812 193.573 C 34.399 222.095,18.619 280.625,46.211 303.369 C 74.191 326.432,109.606 295.813,155.251 209.093 C 178.245 165.407,179.611 164.498,185.946 188.664 C 214.671 298.231,246.630 339.859,261.013 286.443 C 264.233 274.484,262.422 273.822,255.423 284.398 C 248.090 295.479,243.274 295.186,234.074 283.100 C 219.463 263.905,190.096 149.558,193.812 126.325 C 195.199 117.651,193.441 115.436,188.831 120.046 C 187.058 121.819,184.929 119.445,180.677 110.955 C 166.914 83.475,153.959 74.737,137.013 81.505 "
        stroke="none"
        fillRule="evenodd"
      ></path>
    </svg>
  );
}