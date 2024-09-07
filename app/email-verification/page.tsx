import { Email } from "@/components/svg/email";
import { Gradient } from "@/components/svg/gradient";
import { Logo } from "@/components/svg/logo";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-start relative overflow-hidden">
      <Logo className="h-14 m-6" />

      <Gradient className="absolute hidden md:block" />

      <main className="md:w-full h-full flex flex-col gap-4 justify-center items-center text-center m-6">
        <Email className="w-32 mb-4" />

        <div className="md:w-2/4">
          <p>
            Thank you for signing-up! We’ve sent a <b>verification link</b> to
            your email. Please check your inbox and click the link to verify
            your email address. Once verified, you’ll be able to access your
            dashboard and start managing your digital marketing campaigns.
          </p>
          <br />
          <p>
            If you didn’t receive the email, check your spam folder or click
            below to resend the verification link.
          </p>
        </div>

        <button className="bg-main text-black md:w-60">
          Resend Verification Email
        </button>
      </main>
    </div>
  );
}
