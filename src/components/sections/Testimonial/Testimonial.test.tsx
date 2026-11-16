import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonial } from "./index";

describe("Testimonial", () => {
  it("renders the quote, author and stat labels", () => {
    render(<Testimonial />);
    expect(screen.getByText(/the lessons are short enough/i)).toBeInTheDocument();
    expect(screen.getByText(/alex morgan/i)).toBeInTheDocument();
    expect(
      screen.getByText(/active learners/i, { selector: "span" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/expert-led courses/i, { selector: "span" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/complete their first course/i, { selector: "span" })
    ).toBeInTheDocument();
  });
});
