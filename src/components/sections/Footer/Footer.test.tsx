import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer", () => {
  it("renders the tagline and footer links", () => {
    render(<Footer />);
    expect(
      screen.getByText(/practical learning for curious people/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /courses/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /help center/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/© 2026 luma learning/i)).toBeInTheDocument();
  });
});
