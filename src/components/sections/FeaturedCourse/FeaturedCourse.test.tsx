import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeaturedCourse } from "./index";

describe("FeaturedCourse", () => {
  it("renders the course title, badge and meta", () => {
    render(<FeaturedCourse />);
    expect(
      screen.getByText(/designing products people understand/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/most popular this month/i)).toBeInTheDocument();
    expect(screen.getByText(/8 lessons/i)).toBeInTheDocument();
    expect(screen.getByText(/with maya chen/i)).toBeInTheDocument();
  });
});
