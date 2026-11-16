import Link from "next/link";
import { SocialButtons } from "@/components/auth/SocialButtons";

export const metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8">
        <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
          Welcome back
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-2">
          Log in to continue your learning journey.
        </p>

        <div className="mt-8">
          <SocialButtons />
        </div>

        <p className="mt-6 text-center text-sm leading-6 text-muted-2">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-brand transition-colors hover:text-ink"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
