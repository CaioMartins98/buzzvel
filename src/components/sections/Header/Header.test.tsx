import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Header } from "./index";

const { useSession } = vi.hoisted(() => ({ useSession: vi.fn() }));
vi.mock("@/lib/auth-client", () => ({
  authClient: { useSession },
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

describe("Header", () => {
  beforeEach(() => {
    useSession.mockReset();
    useSession.mockReturnValue({ data: null, isPending: false });
  });

  it("renders the brand and the start learning CTA", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /luma/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start learning/i })).toBeInTheDocument();
  });

  it("toggles the mobile menu on hamburger click", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(screen.getByRole("button", { name: /close menu/i })).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });

  it("shows the account menu when authenticated", () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: "Alex Morgan",
          email: "alex@example.com",
          image: "/avatar.jpg",
        },
      },
      isPending: false,
    });
    render(<Header />);
    expect(
      screen.getByRole("button", { name: /open account menu/i })
    ).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /log in/i })).not.toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
