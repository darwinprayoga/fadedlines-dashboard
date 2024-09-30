"use client";

import { Add } from "../svg/add";
import { ArrowDown } from "../svg/arrow-down";
import { Dummy6 } from "../svg/dummy-6";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";

export default function Calendar() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h3 className="text-white">Upcoming Bookings</h3>

        <div className="flex gap-4">
          <div className="relative group w-full">
            <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[200px]">
              19 September 2024
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[200px] left-0 rounded-b-md divide-y divide-[#424242]">
              <div className="px-2 py-1">
                <p className="pointer">1 Days</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">3 Days</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">5 Days</p>
              </div>
            </div>
          </div>

          <div className="relative group w-full">
            <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[179px]">
              1 Day
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[179px] left-0 rounded-b-md divide-y divide-[#424242]">
              <div className="px-2 py-1">
                <p className="pointer">1 Days</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">3 Days</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">5 Days</p>
              </div>
            </div>
          </div>

          <div className="relative group w-full">
            <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[179px]">
              Josh
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[179px] left-0 rounded-b-md divide-y divide-[#424242]">
              <div className="px-2 py-1">
                <p className="pointer">John Doe</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">John Doe</p>
              </div>
              <div className="px-2 py-1">
                <p className="pointer">John Doe</p>
              </div>
              <div className="px-2 py-1">
                <button className="bg-main w-full text-[#3E3E3E]">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dummy6 className="w-full" />

      <div className="w-full flex justify-end py-4">
        <Stepper className="w-40" />
      </div>
    </main>
  );
}
