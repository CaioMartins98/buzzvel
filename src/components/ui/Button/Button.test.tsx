import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
  it("renders as a link with the given href", () => {
    render(<Button href="#skills">Explore courses</Button>);
    expect(screen.getByRole("link", { name: /explore courses/i })).toHaveAttribute(
      "href",
      "#skills"
    );
  });

  it("applies the primary variant by default", () => {
    render(<Button href="#">Default</Button>);
    expect(screen.getByRole("link", { name: /default/i })).toHaveClass(
      "bg-brand"
    );
  });

  it("applies the secondary variant class", () => {
    render(
      <Button href="#" variant="secondary">
        Secondary
      </Button>
    );
    expect(screen.getByRole("link", { name: /secondary/i })).toHaveClass(
      "border-line"
    );
  });
});
