import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "./index";

describe("Container", () => {
  it("renders the children", () => {
    render(
      <Container>
        <p>Content</p>
      </Container>
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });
});
