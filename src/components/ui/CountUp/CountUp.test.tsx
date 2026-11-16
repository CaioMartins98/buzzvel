import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CountUp } from "./index";

describe("CountUp", () => {
  it("starts from zero", () => {
    render(<CountUp value="120+" />);
    expect(screen.getByText("0+")).toBeInTheDocument();
  });

  it("shows the final value immediately with reduced motion", () => {
    window.matchMedia = (() => ({
      matches: true,
      media: "",
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    })) as unknown as typeof window.matchMedia;

    render(<CountUp value="120+" />);
    expect(screen.getByText("120+")).toBeInTheDocument();
  });
});
