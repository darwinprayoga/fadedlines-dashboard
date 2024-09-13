"use client";

import { ArrowDown } from "@/components/svg/arrow-down";
import { Bell } from "@/components/svg/bell";
import { Dots } from "@/components/svg/dots";
import { Dummy2 } from "@/components/svg/dummy-2";
import { Dummy3 } from "@/components/svg/dummy-3";
import { Dummy4 } from "@/components/svg/dummy-4";
import { Dummy5 } from "@/components/svg/dummy-5";
import { Logo } from "@/components/svg/logo";
import { Logout } from "@/components/svg/logout";
import { Nav1 } from "@/components/svg/nav-1";
import { Nav2 } from "@/components/svg/nav-2";
import { Nav3 } from "@/components/svg/nav-3";
import { Nav4 } from "@/components/svg/nav-4";
import { Nav5 } from "@/components/svg/nav-5";
import { Nav6 } from "@/components/svg/nav-6";
import { Nav7 } from "@/components/svg/nav-7";
import { Nav8 } from "@/components/svg/nav-8";
import { Search } from "@/components/svg/search";
import { Settings } from "@/components/svg/settings";
import { Strips } from "@/components/svg/strips";
import { Trash } from "@/components/svg/trash";
import { User } from "@/components/svg/user";
import { useState } from "react";

export default function Home() {
  const [strip, setStrip] = useState(false);
  const [dot, setDot] = useState(false);
  const [notif, setNotif] = useState(false);

  //dropdown
  const [users, setUsers] = useState(false);
  const [teams, setTeams] = useState(false);
  const [booking, setBooking] = useState(false);

  return (
    <div
      style={{
        background:
          "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
      }}
      className="grid grid-cols-1 md:grid-cols-10"
    >
      <div className="flex justify-between items-center p-6 md:hidden">
        <Strips onClick={() => setStrip(true)} className="h-5 pointer" />
        <h3 className="text-white">Overview</h3>
        <Dots onClick={() => setDot(true)} className="h-5" />
      </div>

      <div
        onClick={() => setDot(false)}
        style={{
          background:
            "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className={`col-span-2 h-full flex-col gap-14 fixed w-full md:static backdrop-blur-md ${
          dot ? "flex md:hidden" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-8 py-14 px-10 items-center">
          <div className="flex flex-col gap-2 items-center">
            <User className="w-14 mb-4" />
            <p>Active</p>
            <div className="flex flex-col items-center">
              <h3 className="text-white">Administrator</h3>
              <p>Dejan Tomic</p>
            </div>

            <button className="bg-main text-black px-4 py-1 rounded-md">
              Verified
            </button>
          </div>

          <div className="flex items-center gap-4">
            <h3 className="text-white">Mode</h3>
            <div className="bg-white p-[2px] flex rounded-md">
              <div className="bg-black px-6 rounded-md">Dark</div>
              <div className="w-14"></div>
            </div>
          </div>

          <div className="bg-white p-1 text-black rounded-md h-min flex justify-between w-52">
            <p>Fadedlines Oakleigh</p>
            <ArrowDown className="w-5" />
          </div>

          <div className="py-1 px-2 rounded-md flex items-center gap-2 w-40">
            <Settings className="w-7" /> <p className="w-full">Settings</p>
            <ArrowDown className="w-6" />
          </div>

          <div className="py-1 px-2 rounded-md flex items-center gap-2 w-40">
            <Logout className="w-6" /> <p className="w-full">Sign Out</p>
            <ArrowDown className="w-6" />
          </div>
        </div>
      </div>

      <div
        onClick={() => setStrip(false)}
        style={{
          background:
            "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className={`col-span-2 h-full md:flex flex-col gap-14 fixed w-full md:static backdrop-blur-md ${
          strip ? "md:flex" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <Logo className="h-32 -mb-6" />
          <h2>Dashboard</h2>
        </div>

        <div className="flex flex-col gap-2 p-[38px]">
          <div className="py-1 px-2 rounded-md bg-main text-black mb-4 flex items-center gap-2">
            <Nav1 className="w-6" /> Overview
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => setUsers(!users)}
              className="py-1 px-2 rounded-md flex items-center gap-2 pointer"
            >
              <Nav2 className="w-6" /> <p className="w-full">User</p>
              <ArrowDown className={`w-6 ${users && "rotate-180"}`} />
            </div>
            {users && (
              <div className="flex flex-col gap-2 pt-2 px-10">
                <p>User</p>
                <p>Role</p>
              </div>
            )}
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2 pointer">
            <Nav3 className="w-6" /> <p className="w-full">Business</p>
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => setTeams(!teams)}
              className="py-1 px-2 rounded-md flex items-center gap-2 pointer"
            >
              <Nav4 className="w-6" /> <p className="w-full">Teams</p>
              <ArrowDown className={`w-6 ${teams && "rotate-180"}`} />
            </div>
            {teams && (
              <div className="flex flex-col gap-2 pt-2 px-10">
                <p>Owner</p>
                <p>Barber</p>
              </div>
            )}
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2 pointer">
            <Nav5 className="w-6" /> <p className="w-full">Services</p>
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => setBooking(!booking)}
              className="py-1 px-2 rounded-md flex items-center gap-2 pointer"
            >
              <Nav6 className="w-6" /> <p className="w-full">Booking</p>
              <ArrowDown className={`w-6 ${booking && "rotate-180"}`} />
            </div>
            {booking && (
              <div className="flex flex-col gap-2 pt-2 px-10">
                <p>List</p>
                <p>Calendar</p>
              </div>
            )}
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2 pointer">
            <Nav7 className="w-6" /> <p className="w-full">Customer</p>
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2 pointer">
            <Nav8 className="w-6" /> <p className="w-full">Marketing</p>
          </div>
        </div>
      </div>

      <div className="col-span-8 h-full flex flex-col p-6 md:p-8">
        <div className="hidden md:flex p-6 md:p-8 items-center justify-between">
          <h2 className="text-white">Overview</h2>

          <div className="flex gap-8">
            <div className="flex items-center gap-4">
              <h3 className="text-white">Mode</h3>
              <div className="bg-white p-[2px] flex rounded-md">
                <div className="bg-black px-6 rounded-md">Dark</div>
                <div className="w-14"></div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Search className="w-5" />
              <input
                className="rounded-md px-1 text-black h-min"
                type="search"
                name="search"
                id="search"
              />
            </div>

            <div className="flex gap-8 items-center relative">
              <Bell onClick={() => setNotif(!notif)} className="w-7 pointer" />
              <User className="w-8" />
              <div className="flex flex-col items-center">
                <p>Administrator</p>
                <sub>Dejan Tomic</sub>
              </div>
              <Dots onClick={() => setDot(!dot)} className="h-5 pointer" />
              {notif && (
                <div
                  style={{
                    background:
                      "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
                  }}
                  className="absolute -left-96 top-14 rounded-md p-6 gap-4 flex flex-col items-center 
               opacity-0 translate-y-[-20px] transition-all duration-300 ease-in-out
               animate-[fadeInDrop_0.3s_ease-in-out_forwards]"
                >
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <User className="w-7" />
                    <p className="w-72">
                      New Incoming Booking From AldovaGuswantri / Booking Number
                      43823d3
                    </p>
                    <Trash className="w-7" />
                  </div>
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <User className="w-7" />
                    <p className="w-72">
                      New Incoming Booking From AldovaGuswantri / Booking Number
                      43823d3
                    </p>
                    <Trash className="w-7" />
                  </div>
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <User className="w-7" />
                    <p className="w-72">
                      New Incoming Booking From AldovaGuswantri / Booking Number
                      43823d3
                    </p>
                    <Trash className="w-7" />
                  </div>

                  <button className="bg-main text-black w-max py-1 px-2">
                    See More
                  </button>
                </div>
              )}

              {dot && (
                <div
                  style={{
                    background:
                      "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
                  }}
                  className="absolute right-0 top-14 rounded-md p-6 gap-4 flex flex-col
               opacity-0 translate-y-[-20px] transition-all duration-300 ease-in-out
               animate-[fadeInDrop_0.3s_ease-in-out_forwards]"
                >
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <Settings className="w-7" />
                    <p>Settings</p>
                  </div>
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <Nav2 className="w-7" />
                    <p>Profile</p>
                  </div>
                  <div className="py-1 px-2 rounded-md flex items-center gap-2">
                    <Logout className="w-6" />
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div
            style={{
              background:
                "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
            }}
            className="px-5 py-3 gap-4 rounded-md flex flex-col h-min"
          >
            <div className="flex justify-between gap-52">
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-medium w-max">
                  Hi, Dejan Tomic
                </h4>

                <button className="bg-main text-black w-max py-1 px-2">
                  Verified
                </button>
              </div>
              <div className="w-28 h-28 bg-[#2F2F2F] rounded-md"></div>
            </div>

            <div className="w-full bg-main h-[1px]"></div>

            <div className="flex justify-between">
              <div className="relative group w-32 md:w-56">
                <div className="bg-white p-1 text-black rounded-md h-min flex justify-between relative z-10">
                  <p>Fadedlines Oakleigh</p>
                  <ArrowDown className="w-5" />
                </div>

                {/* Dropdown content */}
                <div className="flex flex-col absolute top-4 pt-2 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out z-0">
                  <div className="p-1 pointer">
                    <p>Fadedlines London</p>
                  </div>
                  <div className="p-1 pointer">
                    <p>Fadedlines Jakarta</p>
                  </div>
                  <div className="p-1 pointer">
                    <p>Fadedlines New Zealand</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <p>Active</p>
                <div className="bg-main w-3 h-3 rounded-full"></div>
              </div>
            </div>
          </div>
          <Dummy2 className="md:w-1/2" />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-14 px-6 py-10">
            <h3 className="text-white w-72">Channel Performance</h3>

            <div className="bg-white p-1 text-black rounded-md h-min flex justify-between w-32 md:w-56">
              <p>Monthly</p>
              <ArrowDown className="w-5" />
            </div>
          </div>

          <div className="flex overflow-x-scroll md:-mx-8 md:pl-8">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-max">
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
              <Dummy3 className="md:w-[350px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-14 px-6 py-10">
            <h3 className="text-white w-72">Overall Performance</h3>

            <div className="bg-white p-1 text-black rounded-md h-min flex justify-between w-32 md:w-56">
              <p>Monthly</p>
              <ArrowDown className="w-5" />
            </div>
          </div>

          <Dummy4 className="hidden md:block" />
          <Dummy5 className="md:hidden" />
        </div>
      </div>
    </div>
  );
}
