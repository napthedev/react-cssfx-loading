import { css, keyframes } from "@emotion/css";

import React from "react";

const spin = keyframes`
  50%,
  100% {
    transform: rotate(360deg);
  }
`;

const fill = keyframes`
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

export interface FillingBottleProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const FillingBottle: React.FC<FillingBottleProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "1.4s",
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
          position: relative;
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          border: 3px solid ${color};
          overflow: hidden;
          animation: ${spin} ${duration} ease infinite;

          &::before {
            content: "";
            position: absolute;
            top: -3px;
            left: -3px;
            width: calc(100% + 3px);
            height: calc(100% + 3px);
            background-color: ${color};
            opacity: 0.75;
            transform-origin: center bottom;
            transform: scaleY(1);
            animation: ${fill} ${duration} linear infinite;
          }
        ` + ` ${className}`
      }
    ></div>
  );
};

export default FillingBottle;
