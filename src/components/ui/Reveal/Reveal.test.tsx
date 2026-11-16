import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal } from "./index";

describe("Reveal", () => {
  it("renders the children", () => {
    render(
      <Reveal>
        <p>Content</p>
      </Reveal>
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
