"use client";

import { useState } from "react";
import { ArrowDown } from "../svg/arrow-down";
import { Stepper } from "../svg/stepper";

export default function Calendar() {
  const [days, setDays] = useState(1);

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
              {days} Days
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[179px] left-0 rounded-b-md divide-y divide-[#424242]">
              <div className="px-2 py-1">
                <p onClick={() => setDays(1)} className="pointer">
                  1 Days
                </p>
              </div>
              <div onClick={() => setDays(3)} className="px-2 py-1">
                <p className="pointer">3 Days</p>
              </div>
              <div onClick={() => setDays(5)} className="px-2 py-1">
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

      {days == 1 && (
        <div
          style={{
            background:
              "radial-gradient(67.89% 214.12% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
          }}
          className="w-full rounded-md overflow-y-auto"
        >
          <table className="w-full">
            <tbody className="divide-y divide-[#3E3E3E]">
              <tr>
                <th className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h3 className="text-white">All Day</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">19 September</h3>
                </th>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">1 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">2 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">3 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">4 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">5 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">6 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">7 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">8 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">9 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">10 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">11 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">12 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">1 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">2 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">3 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">4 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">5 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">6 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">7 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">8 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">9 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">10 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">11 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">12 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {days == 3 && (
        <div
          style={{
            background:
              "radial-gradient(67.89% 214.12% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
          }}
          className="w-full rounded-md overflow-y-auto"
        >
          <table className="w-full">
            <tbody className="divide-y divide-[#3E3E3E]">
              <tr>
                <th className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h3 className="text-white">All Day</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">19 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">20 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">21 September</h3>
                </th>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">1 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">2 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">3 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">4 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">5 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">6 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">7 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">8 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">9 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">10 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">11 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">12 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">1 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">2 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">3 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">4 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">5 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">6 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">7 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">8 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">9 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">10 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">11 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-1/4 text-center">
                  <h4 className="text-white">12 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {days == 5 && (
        <div
          style={{
            background:
              "radial-gradient(67.89% 214.12% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
          }}
          className="w-full rounded-md overflow-y-auto"
        >
          <table className="w-full">
            <tbody className="divide-y divide-[#3E3E3E]">
              <tr>
                <th className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h3 className="text-white">All Day</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">19 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">20 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">21 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">22 September</h3>
                </th>
                <th className="p-5 hover:bg-white/5">
                  <h3 className="text-white">23 September</h3>
                </th>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">1 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">2 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">3 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">4 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">5 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">6 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">7 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">8 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">9 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">10 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">11 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">12 am</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">1 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">2 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">3 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">4 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">5 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">6 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">7 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">8 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">9 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">10 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">11 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h4 className="text-white">12 pm</h4>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
                <td className="p-5 hover:bg-white/5">
                  <div className="invisible bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col">
                    <p>9:45 am</p>
                    <b>Rudi Tabootie</b>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="w-full flex justify-end py-4">
        <Stepper className="w-40" />
      </div>
    </main>
  );
}
