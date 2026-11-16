import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserMenu } from "./index";

const { signOut } = vi.hoisted(() => ({ signOut: vi.fn() }));
vi.mock("@/lib/auth-client", () => ({ authClient: { signOut } }));

const { push, refresh } = vi.hoisted(() => ({ push: vi.fn(), refresh: vi.fn() }));
vi.mock("next/navigation", () => ({ useRouter: () => ({ push, refresh }) }));

const user = {
  name: "Alex Morgan",
  email: "alex@example.com",
  image: "/avatar.jpg",
};

describe("UserMenu", () => {
  beforeEach(() => {
    signOut.mockReset();
    signOut.mockResolvedValue({});
    push.mockReset();
    refresh.mockReset();
  });

  it("renders the avatar button", () => {
    render(<UserMenu user={user} />);
    expect(
      screen.getByRole("button", { name: /open account menu/i })
    ).toBeInTheDocument();
  });

  it("shows the user info and signs out", async () => {
    render(<UserMenu user={user} />);
    await userEvent.click(
      screen.getByRole("button", { name: /open account menu/i })
    );
    expect(screen.getByText(/alex morgan/i)).toBeInTheDocument();
    expect(screen.getByText(/alex@example.com/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("menuitem", { name: /log out/i }));
    await waitFor(() => expect(signOut).toHaveBeenCalled());
    expect(push).toHaveBeenCalledWith("/");
  });

  it("shows the initial when there is no image", () => {
    render(
      <UserMenu
        user={{ name: "Alex", email: "alex@example.com", image: null }}
      />
    );
    expect(screen.getByText("A")).toBeInTheDocument();
  });
});
