import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SocialButtons } from "./index";

const { signInSocial } = vi.hoisted(() => ({ signInSocial: vi.fn() }));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    signIn: { social: signInSocial },
  },
}));

describe("SocialButtons", () => {
  beforeEach(() => {
    signInSocial.mockReset();
    signInSocial.mockResolvedValue({ data: {}, error: null });
  });

  it("renders Google and GitHub buttons", () => {
    render(<SocialButtons />);
    expect(
      screen.getByRole("button", { name: /continue with google/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue with github/i })
    ).toBeInTheDocument();
  });

  it("starts social sign-in with the chosen provider", async () => {
    render(<SocialButtons />);
    await userEvent.click(
      screen.getByRole("button", { name: /continue with google/i })
    );
    await waitFor(() =>
      expect(signInSocial).toHaveBeenCalledWith(
        expect.objectContaining({ provider: "google" })
      )
    );
  });
});
