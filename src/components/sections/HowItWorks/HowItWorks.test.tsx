import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HowItWorks } from "./index";

describe("HowItWorks", () => {
  it("renders the heading and the three steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText(/less browsing. more learning/i)).toBeInTheDocument();
    expect(screen.getByText(/choose your focus/i)).toBeInTheDocument();
    expect(screen.getByText(/learn from experience/i)).toBeInTheDocument();
    expect(screen.getByText(/put it into practice/i)).toBeInTheDocument();
  });
});
