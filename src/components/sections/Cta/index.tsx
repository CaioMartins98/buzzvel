"use client";

import { trustedAvatars } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { authClient } from "@/lib/auth-client";

export function Cta() {
  const { data: session } = authClient.useSession();
  const isAuthenticated = Boolean(session?.user);

  return (
    <section className="relative overflow-hidden bg-lemon-soft bg-[url('/images/FinalCTA-bg.svg')] bg-cover bg-center">
      <Container className="relative py-[60px] text-center lg:py-[100px]">
        <div className="flex items-center justify-center mb-2">
        <AvatarStack avatars={trustedAvatars} />
        </div>
        <h2 className="mx-auto max-w-2xl font-heading text-[36px] font-extrabold leading-[40px] tracking-tight text-ink lg:text-[56px] lg:leading-[64px]">
          What will you learn next?
        </h2>
        <p className="mt-4 text-base leading-[26px] text-muted-2 lg:text-lg lg:leading-[28px]">
          Start with one course. Build from there.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="#skills">Explore all courses</Button>
          {isAuthenticated ? (
            <Button href="#skills" variant="secondary">
              Continue learning
            </Button>
          ) : (
            <Button href="/signup" variant="secondary">
              Join Luma
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

