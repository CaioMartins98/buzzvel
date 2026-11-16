import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { learningStats, content } from "@/lib/data";

export function Testimonial() {
  return (
    <section className="bg-white">
      <Container className="py-[60px] lg:py-[100px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-[60px]">
          <figure className="max-w-[600px]">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              aria-hidden="true"
              className="text-brand"
            >
              <path
                d="M0 22v-8.8C0 5.6 3.6 1.2 9.6 0l1.2 2.4c-3.6 1.2-5.4 3-5.4 5.4h5.4V22H0zm12 0v-8.8C12 5.6 15.6 1.2 21.6 0l1.2 2.4c-3.6 1.2-5.4 3-5.4 5.4h5.4V22H12z"
                fill="currentColor"
              />
            </svg>
            <blockquote className="mt-4 font-heading text-[20px] font-semibold leading-[28px] tracking-tight text-ink lg:text-[30px] lg:leading-[44px]">
              {content.testimonial.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <Image
                src="/images/avatar-1.jpg"
                alt="Alex Morgan"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-base leading-6 text-ink">{content.testimonial.author}</p>
                <p className="text-sm leading-6 text-muted-2">
                  {content.testimonial.role}
                </p>
              </div>
            </figcaption>
          </figure>

          <dl className="grid grid-cols-3 content-center gap-5 border-line lg:grid-cols-1 lg:border-l lg:pl-[48px]">
            {learningStats.map((stat) => (
              <div key={stat.value}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="flex flex-col gap-1">
                  <CountUp
                    value={stat.value}
                    className="font-heading text-[40px] font-extrabold leading-[44px] tracking-tight text-brand lg:text-[64px] lg:leading-[70px]"
                  />
                  <span className="text-sm leading-6 text-muted-2">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

