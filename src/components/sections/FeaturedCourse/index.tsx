import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const meta = ["8 lessons", "2h 40min", "Intermediate"];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9h12M11 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedCourse() {
  return (
    <section className="bg-brand">
      <Container className="py-[60px] lg:py-[100px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-[60px]">
          <div className="relative">
            <span className="absolute -top-3 -left-2 z-10 rounded-md bg-lemon px-3 py-1.5 text-xs font-semibold leading-4 tracking-[0.12em] text-ink">
              FEATURED COURSE
            </span>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/featured-course.svg"
                alt="Product design course — student working on interface designs"
                width={538}
                height={408}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold leading-4 tracking-[0.12em] text-white">
              Most popular this month
            </p>
            <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[36px] tracking-tight text-white lg:text-[48px] lg:leading-[56px]">
              Designing products people understand.
            </h2>
            <p className="mt-5 text-base leading-[26px] text-white lg:leading-[28px]">
              Learn how to turn complex workflows into simple, intentional
              product experiences through research, structure and thoughtful
              interaction design.
            </p>
            <p className="mt-6 text-base leading-[28px] text-white/80">
              with Maya Chen · Senior Product Designer
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {meta.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line/70 px-3.5 py-1.5 text-sm leading-6 text-white"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
              <Button href="#contact" variant="lemon" className="w-full lg:w-auto">
                View course
              </Button>
              <Link
                href="#skills"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm leading-6 text-white transition-colors hover:text-lemon lg:justify-start"
              >
                Browse all courses
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


