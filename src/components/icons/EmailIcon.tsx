import React from "react";

interface Props {
  [key: string]: any;
}

function EmailIcon(props: Props): JSX.Element {
  const { ...rest } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 31 24"
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5625 4.18208L15.5625 11.4646L30.5625 4.18208C30.507 3.25391 30.0881 2.38147 29.3917 1.74346C28.6953 1.10544 27.7741 0.750135 26.8167 0.750305H4.30828C3.35089 0.750135 2.42966 1.10544 1.73327 1.74346C1.03688 2.38147 0.618028 3.25391 0.5625 4.18208Z"
        fill="black"
      />
      <path
        d="M30.5625 8.25031L15.5625 15.8626L0.5625 8.25031V19.4442C0.5625 20.4536 0.957588 21.4217 1.66085 22.1355C2.36411 22.8493 3.31794 23.2503 4.3125 23.2503H26.8125C27.8071 23.2503 28.7609 22.8493 29.4641 22.1355C30.1674 21.4217 30.5625 20.4536 30.5625 19.4442V8.25031Z"
        fill="black"
      />
    </svg>
  );
}

export default EmailIcon;