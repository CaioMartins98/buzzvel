import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Eyebrow } from "./index";

describe("Eyebrow", () => {
  it("renders the text", () => {
    render(<Eyebrow>Find your next skill</Eyebrow>);
    expect(screen.getByText(/find your next skill/i)).toBeInTheDocument();
  });
});
