import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream">
      <Container className="py-[60px] lg:py-[100px]">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[36px] tracking-tight text-ink lg:text-[48px] lg:leading-[56px]">
            Less browsing. More learning.
          </h2>
        </div>

        <div className="relative isolate mt-14 pt-7 lg:mt-[80px]">
          <div
            aria-hidden="true"
            className="absolute left-0 top-14 right-[264px] -z-10 hidden h-px bg-line lg:block"
          />
          <ol className="grid gap-10 sm:grid-cols-3 lg:gap-[80px]">
            {steps.map((step) => (
              <li key={step.number}>
                <Image
                  src={step.image}
                  alt=""
                  width={56}
                  height={56}
                  unoptimized
                  className="h-14 w-14"
                />
                <p className="mt-4 text-xs uppercase font-semibold leading-4 tracking-[0.12em] text-muted-2">{step.number}</p>
                <h3 className="mt-3 font-heading text-xl font-bold leading-8 text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-[26px] text-muted-2 lg:leading-[28px]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

