import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-[80px] lg:grid-cols-[416px_1fr]">
        <div>
          <Link
            href="/"
            className="inline-block rounded-sm font-heading text-lg font-extrabold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="luma — home"
          >
            luma<span aria-hidden="true">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
            Practical learning for curious people.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3"
        >
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold leading-4 tracking-[0.12em] text-white/50">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm leading-6 text-white/85 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-white/10 py-6">
        <p className="text-[13px] leading-[19.5px] text-white/60">
          © 2026 Luma Learning
        </p>
      </Container>
    </footer>
  );
}

