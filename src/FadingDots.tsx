import { css, keyframes } from "goober";

import React from "react";

const fade = keyframes`
  to {
    opacity: 0.2;
  }
`;

export interface FadingDotsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const FadingDots: React.FC<FadingDotsProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "0.6s",
  ...others
}) => {
  let resolvedWidth = typeof width === "number" ? `${width}px` : width;
  let resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      {...others}
      style={style}
      className={
        css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          align-items: center;

          & > div {
            width: calc(${resolvedWidth} / 6);
            height: calc(${resolvedHeight} / 6);
            background-color: ${color};
            border-radius: 50%;
            animation: ${fade} ${duration} alternate ease-in-out infinite;
          }

          & > div:nth-of-type(2),
          & > div:nth-of-type(4) {
            animation-delay: calc(${duration} / 6);
          }

          & > div:nth-of-type(3),
          & > div:nth-of-type(5),
          & > div:nth-of-type(7) {
            animation-delay: calc(${duration} / 3);
          }

          & > div:nth-of-type(6),
          & > div:nth-of-type(8) {
            animation-delay: calc(${duration} / 2);
          }

          & > div:nth-of-type(9) {
            animation-delay: calc(${duration} * 2 / 3);
          }
        ` + ` ${className}`
      }
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FadingDots;
