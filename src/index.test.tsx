import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
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
} from "./index";

describe("Render without crashing", () => {
  const components = [
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
  ];

  components.forEach((Component) => {
    it(`Render ${Component.name}`, () => {
      const { container } = render(<Component />);
      expect(container).toBeDefined();
    });
  });
});
