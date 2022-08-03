import { css, keyframes } from "goober";

import React from "react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export interface RingProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const Ring: React.FC<RingProps & React.SVGProps<SVGSVGElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3rem",
  height = "3rem",
  style = {},
  duration = "1s",
  ...others
}) => {
  let resolvedWidth = typeof width === "number" ? `${width}px` : width;
  let resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <svg
      {...others}
      crossOrigin="anonymous"
      viewBox="0 0 50 50"
      style={style}
      className={
        css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          animation: ${spin} ${duration} ease infinite;
        ` + ` ${className}`
      }
    >
      <circle
        className={css`
          fill: none;
          stroke: ${color};
          opacity: 0.7;
          stroke-width: 2;
        `}
        cx="25"
        cy="25"
        r="20"
      ></circle>
      <circle
        className={css`
          fill: ${color};
          stroke: none;
        `}
        cx="25"
        cy="5"
        r="3.5"
      ></circle>
    </svg>
  );
};

export default Ring;
