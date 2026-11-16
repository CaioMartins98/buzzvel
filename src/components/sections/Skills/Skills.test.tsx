import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "./index";

describe("Skills", () => {
  it("renders the four category cards", () => {
    render(<Skills />);
    expect(screen.getByText("Product Design")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
    expect(screen.getByText("Creative")).toBeInTheDocument();
  });
});
