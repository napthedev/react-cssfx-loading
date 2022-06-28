import {
  BarWave,
  BouncingBalls,
  CircularProgress,
  Coin,
  FadingBalls,
  FadingDots,
  FillingBottle,
  FlippingSquare,
  Hypnosis,
  Messaging,
  Ring,
  Spin,
  SpinStretch,
  TwinSpin,
} from "../src";

import React from "react";
import { render } from "@testing-library/react";

describe("Render without crashing", () => {
  [
    BarWave,
    BouncingBalls,
    CircularProgress,
    Coin,
    FadingBalls,
    FadingDots,
    FillingBottle,
    FlippingSquare,
    Hypnosis,
    Messaging,
    Ring,
    Spin,
    SpinStretch,
    TwinSpin,
  ].forEach(Component => {
    it(`Render ${Component.name}`, () => {
      render(<Component />);
    });
  });
});
