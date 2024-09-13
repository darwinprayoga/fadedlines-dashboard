import { Logo } from "@/components/svg/logo";

export default function Home() {
  return (
    <div className="bg-[url('/assets/bg-login.png')] bg-cover h-screen flex justify-between items-center md:items-start p-6">
      <Logo className="h-14 hidden md:block" />

      <main
        style={{
          background:
            "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className="flex flex-col justify-center items-center p-10 md:p-20 rounded-3xl relative md:w-1/2 w-full md:h-full"
      >
        <div className="border-fade z-0"></div>

        <div className="flex flex-col items-center gap-4 z-10 w-full">
          <div className="flex flex-col items-center">
            <Logo className="h-24 -mb-6" />
            <h2>Sign Up</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col gap-4 md:w-1/2">
              <div className="flex flex-col">
                <i className="ml-4">Name</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>

              <div className="flex flex-col">
                <i className="ml-4">Email</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col">
                <i className="ml-4">Phone Number</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:w-1/2">
              <div className="flex flex-col">
                <i className="ml-4">Address</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="text"
                  name="address"
                  id="address"
                />
              </div>

              <div className="flex flex-col">
                <i className="ml-4">Password</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>

              <div className="flex flex-col">
                <i className="ml-4">Confirm Password</i>
                <input
                  className="bg-[#282828] p-2 rounded-md"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center w-72 mt-4">
            <p className="text-main flex justify-center gap-2">
              <input type="checkbox" /> Agree with terms and conditions.
            </p>
            <button className="w-full bg-main text-black">Sign Up</button>
            <p className="text-main">
              Already have an account? <a className="italic">Login</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
