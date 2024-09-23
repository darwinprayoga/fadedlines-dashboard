import { ArrowDown } from "../svg/arrow-down";
import { Dummy2 } from "../svg/dummy-2";
import { Dummy4 } from "../svg/dummy-4";
import { Dummy5 } from "../svg/dummy-5";
import { Stepper } from "../svg/stepper";

export default function Overview() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-10">
        <div
          style={{
            background:
              "radial-gradient(83.11% 289.3% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
          }}
          className="px-14 py-8 gap-4 rounded-md flex flex-col h-min"
        >
          <div className="flex justify-between gap-4">
            <div className="w-20 h-20 bg-[#2F2F2F] rounded-md hidden md:block"></div>
            <div className="flex flex-col gap-4 w-full md:w-max">
              <div className="flex justify-between gap-4">
                <h4 className="text-white font-medium w-max">
                  Hi, Dejan Tomic
                </h4>
                <div className="flex flex-col gap-2">
                  <button className="bg-main text-black w-max py-1 px-2">
                    Verified
                  </button>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="relative group w-full">
                  <div className="bg-[#3E3E3E] px-2 py-1 text-white rounded-md h-min flex justify-between relative z-10">
                    <p>Fadedlines Oakleigh</p>
                    <ArrowDown className="w-5 group-hover:rotate-180" />
                  </div>

                  <div className="flex flex-col absolute top-4 pt-2 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out z-0">
                    <div className="px-2 py-1">
                      <p className="pointer">Fadedlines London</p>
                    </div>
                    <div className="px-2 py-1">
                      <p className="pointer">Fadedlines Jakarta</p>
                    </div>
                    <div className="px-2 py-1">
                      <p className="pointer">Fadedlines New Zealand</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dummy2 className="md:h-[144px]" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-14 px-6 py-10">
          <h3 className="text-white w-72">Channel Performance</h3>

          <div className="flex justify-between w-32 md:w-56">
            <div className="relative group w-full">
              <div className="bg-[#3E3E3E] px-2 py-1 text-white rounded-md h-min flex justify-between relative z-10">
                <p>Monthly</p>
                <ArrowDown className="w-5 group-hover:rotate-180" />
              </div>

              <div className="flex flex-col absolute top-4 pt-2 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out z-0">
                <div className="px-2 py-1">
                  <p className="pointer">Hourly</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Daily</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-scroll md:-mx-8 md:pl-8">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-max">
            <div
              style={{
                background:
                  "radial-gradient(108.26% 270.64% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
              }}
              className="flex flex-col rounded-xl p-6 gap-2 w-[350px]"
            >
              <h4 className="text-white">All Channels</h4>
              <div className="flex justify-between">
                <h1 className="text-7xl">170</h1>

                <div className="flex flex-col items-end">
                  <div className="flex gap-6">
                    <h3 className="text-white">New:</h3>
                    <h3 className="text-white font-semibold">43</h3>
                  </div>
                  <div className="flex gap-6">
                    <h3 className="text-white">Old:</h3>
                    <h3 className="text-white font-semibold">127</h3>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#3E3E3E]"></div>
              <div className="w-full flex justify-end">
                <p className="text-[#3E3E3E]">Bookings/month</p>
              </div>
            </div>

            <div
              style={{
                background:
                  "radial-gradient(108.26% 270.64% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
              }}
              className="flex flex-col rounded-xl p-6 gap-2 w-[350px]"
            >
              <h4 className="text-white">Facebook</h4>
              <div className="flex justify-between">
                <h1 className="text-7xl">54</h1>

                <div className="flex flex-col items-end">
                  <div className="flex gap-6">
                    <h3 className="text-white">New:</h3>
                    <h3 className="text-white font-semibold">10</h3>
                  </div>
                  <div className="flex gap-6">
                    <h3 className="text-white">Old:</h3>
                    <h3 className="text-white font-semibold">47</h3>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#3E3E3E]"></div>
              <div className="w-full flex justify-end">
                <p className="text-[#3E3E3E]">Bookings/month</p>
              </div>
            </div>

            <div
              style={{
                background:
                  "radial-gradient(108.26% 270.64% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
              }}
              className="flex flex-col rounded-xl p-6 gap-2 w-[350px]"
            >
              <h4 className="text-white">Google</h4>
              <div className="flex justify-between">
                <h1 className="text-7xl">56</h1>

                <div className="flex flex-col items-end">
                  <div className="flex gap-6">
                    <h3 className="text-white">New:</h3>
                    <h3 className="text-white font-semibold">22</h3>
                  </div>
                  <div className="flex gap-6">
                    <h3 className="text-white">Old:</h3>
                    <h3 className="text-white font-semibold">33</h3>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#3E3E3E]"></div>
              <div className="w-full flex justify-end">
                <p className="text-[#3E3E3E]">Bookings/month</p>
              </div>
            </div>

            <div
              style={{
                background:
                  "radial-gradient(108.26% 270.64% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
              }}
              className="flex flex-col rounded-xl p-6 gap-2 w-[350px]"
            >
              <h4 className="text-white">Tiktok</h4>
              <div className="flex justify-between">
                <h1 className="text-7xl">60</h1>

                <div className="flex flex-col items-end">
                  <div className="flex gap-6">
                    <h3 className="text-white">New:</h3>
                    <h3 className="text-white font-semibold">10</h3>
                  </div>
                  <div className="flex gap-6">
                    <h3 className="text-white">Old:</h3>
                    <h3 className="text-white font-semibold">50</h3>
                  </div>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#3E3E3E]"></div>
              <div className="w-full flex justify-end">
                <p className="text-[#3E3E3E]">Bookings/month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end py-4">
          <Stepper className="w-40" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-14 px-6 py-10">
          <h3 className="text-white w-72">Overall Performance</h3>

          <div className="flex justify-between w-32 md:w-56">
            <div className="relative group w-full">
              <div className="bg-[#3E3E3E] px-2 py-1 text-white rounded-md h-min flex justify-between relative z-10">
                <p>Monthly</p>
                <ArrowDown className="w-5 group-hover:rotate-180" />
              </div>

              <div className="flex flex-col absolute top-4 pt-2 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out z-0">
                <div className="px-2 py-1">
                  <p className="pointer">Hourly</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Daily</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Weekly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dummy4 className="hidden md:block" />
        <Dummy5 className="md:hidden" />
      </div>
    </main>
  );
}
