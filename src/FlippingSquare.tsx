import { css, keyframes } from "goober";

import React from "react";

const flip = keyframes`
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(180deg) rotateX(180deg);
  }
`;

export interface FlippingSquareProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const FlippingSquare: React.FC<FlippingSquareProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "1s",
  ...others
}) => {
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      {...others}
      style={style}
      className={
        css`
          perspective: 9999px;
        ` + ` ${className}`
      }
    >
      <div
        className={css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          background-color: ${color};
          transform: rotate(0);
          animation: ${flip} ${duration} infinite;
        `}
      ></div>
    </div>
  );
};

export default FlippingSquare;
