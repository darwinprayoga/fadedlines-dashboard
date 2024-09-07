"use client";

import { ArrowDown } from "@/components/svg/arrow-down";
import { Bell } from "@/components/svg/bell";
import { Dots } from "@/components/svg/dots";
import { Dummy1 } from "@/components/svg/dummy-1";
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
import { Search } from "@/components/svg/search";
import { Settings } from "@/components/svg/settings";
import { Strips } from "@/components/svg/strips";
import { User } from "@/components/svg/user";
import { useState } from "react";

export default function Home() {
  const [strip, setStrip] = useState(false);
  const [dot, setDot] = useState(false);

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

      {dot && (
        <div
          onClick={() => setDot(false)}
          style={{
            background:
              "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
          }}
          className="col-span-2 h-full md:flex flex-col gap-14 fixed w-full md:static backdrop-blur-md"
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
              <Logout className="w-6" /> <p className="w-full">Log Out</p>
              <ArrowDown className="w-6" />
            </div>
          </div>
        </div>
      )}

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

        <div className="flex flex-col gap-2 p-8">
          <div className="py-1 px-2 rounded-md bg-main text-black mb-4 flex items-center gap-2">
            <Nav1 className="w-6" /> Overview
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav2 className="w-6" /> <p className="w-full">User</p>
            <ArrowDown className="w-6" />
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav3 className="w-6" /> <p className="w-full">Business</p>
            <ArrowDown className="w-6" />
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav4 className="w-6" /> <p className="w-full">Booking</p>
            <ArrowDown className="w-6" />
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav5 className="w-6" /> <p className="w-full">Customer</p>
            <ArrowDown className="w-6" />
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav6 className="w-6" /> <p className="w-full">Ad Channel</p>
            <ArrowDown className="w-6" />
          </div>
          <div className="py-1 px-2 rounded-md flex items-center gap-2">
            <Nav7 className="w-6" /> <p className="w-full">Report</p>
            <ArrowDown className="w-6" />
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

            <div className="flex gap-6 items-center">
              <Bell className="w-7" />
              <User className="w-8" />
              <div className="flex flex-col items-center">
                <p>Administrator</p>
                <sub>Dejan Tomic</sub>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Dummy1 className="md:w-1/2" />
          <Dummy2 className="md:w-1/2" />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-20 px-6 py-10">
            <h3 className="text-white">Channel Performance</h3>

            <div className="bg-white p-1 text-black rounded-md h-min flex justify-between w-32 md:w-56">
              <p>Monthly</p>
              <ArrowDown className="w-5" />
            </div>
          </div>

          <div className="flex overflow-x-scroll md:-mx-8 md:pl-8">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-max">
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
              <Dummy3 className="md:w-80" />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-20 px-6 py-10">
            <h3 className="text-white">Overall Performance</h3>

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
