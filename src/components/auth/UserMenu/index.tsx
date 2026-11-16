"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

type UserMenuProps = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

function initials(user: UserMenuProps["user"]) {
  const source = user.name ?? user.email ?? "?";
  return source.charAt(0).toUpperCase();
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  async function handleSignOut() {
    await authClient.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Open account menu"
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name ?? "Your profile"}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
            {initials(user)}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 mt-2 w-56 rounded-xl border border-line bg-white p-2 shadow-lg lg:left-auto lg:right-0"
        >
          <div className="px-3 py-2">
            <p className="truncate text-sm font-semibold text-ink">
              {user.name ?? "Account"}
            </p>
            <p className="truncate text-xs text-muted-2">{user.email}</p>
          </div>
          <div className="my-1 border-t border-line" />
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-cream"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
