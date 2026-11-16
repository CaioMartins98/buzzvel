import Link from "next/link";
import { SocialButtons } from "@/components/auth/SocialButtons";

export const metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8">
        <h1 className="font-heading text-2xl font-extrabold tracking-tight text-ink">
          Create your account
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-2">
          Start learning with Luma — it&apos;s free.
        </p>

        <div className="mt-8">
          <SocialButtons />
        </div>

        <p className="mt-6 text-center text-sm leading-6 text-muted-2">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-brand transition-colors hover:text-ink"
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
