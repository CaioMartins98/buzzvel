import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { trustedAvatars, content } from "@/lib/data";


export function Hero() {
  return (
    <section className="overflow-hidden bg-cream">
      <Container className="grid items-center gap-12 py-[60px] lg:grid-cols-[560px_500px] lg:justify-between lg:gap-[60px] lg:py-[100px]">
        <div className="order-2 max-w-[560px] lg:order-1">
          <Eyebrow>{content.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-heading text-[40px] font-extrabold leading-[44px] tracking-tight text-ink lg:text-[64px] lg:leading-[70px]">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-[480px] text-base leading-[26px] text-muted-2 lg:text-lg lg:leading-[28px]">
            {content.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 lg:flex-row">
            <Button href={content.hero.primaryCta.href} className="w-full lg:w-auto">
              {content.hero.primaryCta.label}
            </Button>
            <Button
              href={content.hero.secondaryCta.href}
              variant="secondary"
              className="w-full lg:w-auto"
            >
              {content.hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
           
            <AvatarStack avatars={trustedAvatars} />
            <p className="text-sm leading-6 text-ink ">
              <b>{content.hero.trust}</b> {content.hero.trustSuffix}
            </p>
          </div>
        </div>

        <div className="order-1 relative mx-auto w-full max-w-[500px] lg:order-2">
          <div
            aria-hidden="true"
            className="absolute -right-4 top-[5%] bottom-[2%] w-12 rounded-2xl bg-peach sm:-right-6 sm:w-16 lg:-right-8 lg:w-20"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-4 -left-10 h-24 w-24 rounded-full bg-sky"
          />
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/hero.jpg"
              alt="Person focused on learning at their laptop"
              width={500}
              height={520}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="absolute bottom-4 -right-2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg shadow-ink/5 sm:-right-6">
            <span aria-hidden="true" className="flex gap-0.5 text-[#FFEE7E]">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M7 1l1.8 3.6 4 .6-2.9 2.8.7 4L7 10.2 3.4 12l.7-4L1.2 5.2l4-.6L7 1z" />
                </svg>
              ))}
            </span>
            <span className="text-sm leading-6 text-ink">{content.hero.rating}</span>
          </div>
          <div className="absolute top-4 -left-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg shadow-ink/5">
            <span className="flex h-8 items-center rounded-lg bg-sky px-3.5 text-sm font-semibold text-brand">
              {content.hero.badgeValue}
            </span>
            <span className="text-sm leading-6 text-ink">
              {content.hero.badgeLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

