import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Contact } from "./index";

describe("Contact", () => {
  it("renders the form fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your question/i)).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
    expect(screen.getByText(/please tell us how we can help/i)).toBeInTheDocument();
  });

  it("shows a success message after a valid submit", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText(/full name/i), "Caio");
    await user.type(screen.getByLabelText(/email/i), "caio@example.com");
    await user.type(screen.getByLabelText(/your question/i), "How does Luma work?");

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByRole("status")).toHaveTextContent(/thanks/i);
  });
});
