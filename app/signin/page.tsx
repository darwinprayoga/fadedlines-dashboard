'use client'
import { Logo } from "@/components/svg/logo";
import { useEffect, useState } from "react";
import { login } from "../utils/api/fadedlinesApis";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login({ email, password });
      const token = response.token;
      if (token) {
        setLoading(false)
        localStorage.setItem('token', token);
        router.push('/');
      } else {
        setError('Login failed. Token not received.');
      }
      console.log('Login successful:', response);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('/assets/bg-login.png')] bg-cover h-screen flex justify-between items-center md:items-start p-6">
      <Logo className="h-14 hidden md:block" />

      <main
        style={{
          background:
            "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className="flex flex-col justify-center items-center p-10 md:p-20 rounded-3xl relative md:w-1/3 w-full md:h-full"
      >
        <div className="border-fade z-0"></div>

        <div className="flex flex-col gap-4 z-10 w-full">
          <div className="flex flex-col items-center">
            <Logo className="h-24 -mb-6" />
            <h2>Login</h2>
          </div>

          <div className="flex flex-col">
            <i className="ml-4">Email</i>
            <input
              className="bg-[#282828] p-2 rounded-md"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col">
            <i className="ml-4">Password</i>
            <input
              className="bg-[#282828] p-2 rounded-md"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-4 items-center mt-4">
            <button className="w-full bg-main text-black">
              Login With Google
            </button>
            <div className="flex gap-4 w-full">
              <button type="submit" onClick={handleSubmit} disabled={loading} className="bg-main text-black w-1/2"> {loading ? 'Logging in...' : 'Login'}</button>
              <button className="bg-secondary text-main w-1/2">Sign Up</button>
            </div>
            <p className="text-main">
              Can’t login? <a className="italic">Forgot Password</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
