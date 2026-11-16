import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AvatarStack } from "./index";

describe("AvatarStack", () => {
  it("renders one image per avatar", () => {
    const { container } = render(
      <AvatarStack avatars={["/images/avatar-1.jpg", "/images/avatar-2.jpg"]} />
    );
    expect(container.querySelectorAll("img")).toHaveLength(2);
  });
});
