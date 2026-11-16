import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { content } from "@/lib/data";

export function People() {
  return (
    <section id="community" className="bg-cream">
      <Container className="grid gap-12 py-[60px] lg:grid-cols-2 lg:items-center lg:gap-[60px] lg:py-[100px]">
        <div className="max-w-[530px]">
          <Eyebrow>{content.people.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-heading text-[32px] font-extrabold leading-[36px] tracking-tight text-ink lg:text-[48px] lg:leading-[56px]">
            {content.people.title}
          </h2>
          <p className="mt-4 text-base leading-[26px] text-muted-2 lg:text-lg lg:leading-[28px]">
            {content.people.description}
          </p>
          <div className="mt-8">
            <Button href={content.people.cta.href} variant="secondary">
              {content.people.cta.label}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex items-center justify-center rounded-full w-full bg-sky">
            <Image
              src="/images/Col.svg"
              alt="Luma teacher portrait"
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
            />
          </div>
      
        </div>
      </Container>
    </section>
  );
}

