import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { categories, content } from "@/lib/data";

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

export function Skills() {
  return (
    <section id="skills" className="bg-white">
      <Container className="py-[60px] lg:py-[100px]">
        <div className="max-w-[560px]">
          <Eyebrow>{content.skills.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[36px] tracking-tight text-ink lg:text-[48px] lg:leading-[56px]">
            {content.skills.title}
          </h2>
          <p className="mt-4 text-base leading-[26px] text-muted-2 lg:text-lg lg:leading-[28px]">
            {content.skills.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px]">
          {categories.map((category) => (
            <article
              key={category.number}
              className="group flex flex-col rounded-2xl border border-line bg-white p-7 transition-colors hover:border-ink/30"
            >
              <div className="relative">
              
                <span className="absolute left top-0.5  inline-flex h-6 min-w-8 items-center justify-center rounded-md bg-[#E2E8FF] px-2 text-xs font-semibold leading-4 tracking-[0.12em] text-brand">
                  {category.number}
                </span>
              </div>
              <h3 className="mt-10 font-heading text-xl font-bold leading-8 text-ink">
                {category.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-2">
                {category.description}
              </p>
              <Link
                href="#skills"
                className="mt-4 inline-flex items-center gap-1 text-sm leading-6 text-ink transition-colors group-hover:text-brand"
              >
                {content.skills.explore}
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

