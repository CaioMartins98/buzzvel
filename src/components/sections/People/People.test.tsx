import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { People } from "./index";

describe("People", () => {
  it("renders the heading and CTA", () => {
    render(<People />);
    expect(
      screen.getByText(/meet international students/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore teachers and students/i })
    ).toBeInTheDocument();
  });
});
