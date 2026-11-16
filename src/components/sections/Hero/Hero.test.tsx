import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./index";

describe("Hero", () => {
  it("renders the headline and CTAs", () => {
    render(<Hero />);
    expect(
      screen.getByText(/build skills that actually move you forward/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore courses/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /see how it works/i })
    ).toBeInTheDocument();
  });
});
