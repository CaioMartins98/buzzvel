import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cta } from "./index";

const { useSession } = vi.hoisted(() => ({ useSession: vi.fn() }));
vi.mock("@/lib/auth-client", () => ({
  authClient: { useSession },
}));

describe("Cta", () => {
  beforeEach(() => {
    useSession.mockReset();
    useSession.mockReturnValue({ data: null, isPending: false });
  });

  it("renders the heading and CTAs", () => {
    render(<Cta />);
    expect(screen.getByText(/what will you learn next/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /explore all courses/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /join luma/i })).toBeInTheDocument();
  });

  it("shows 'Continue learning' instead of 'Join Luma' when authenticated", () => {
    useSession.mockReturnValue({
      data: { user: { name: "Alex", email: "alex@example.com", image: null } },
      isPending: false,
    });
    render(<Cta />);
    expect(
      screen.getByRole("link", { name: /continue learning/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /join luma/i })
    ).not.toBeInTheDocument();
  });
});
