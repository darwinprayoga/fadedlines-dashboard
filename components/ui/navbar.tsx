"use client";

import Overview from "@/components/routes/overview";
import { ArrowDown } from "@/components/svg/arrow-down";
import { Bell } from "@/components/svg/bell";
import { Dots } from "@/components/svg/dots";
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
import { Shortcut } from "@/components/svg/shortcut";
import { Strips } from "@/components/svg/strips";
import { Trash } from "@/components/svg/trash";
import { Person } from "@/components/svg/person";
import { useEffect, useState } from "react";
import User from "@/components/routes/user";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav1on } from "../svg/nav-1-on";
import { Nav2on } from "../svg/nav-2-on";

export default function Navbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [strip, setStrip] = useState(false);
  const [dot, setDot] = useState(false);
  const [notif, setNotif] = useState(false);

  //dropdown
  const [users, setUsers] = useState(false);
  const [teams, setTeams] = useState(false);
  const [booking, setBooking] = useState(false);

  function eventDefault() {
    setUsers(false);
    setTeams(false);
    setBooking(false);
  }

  //detect route
  const slug = usePathname();
  const [route, setRoute] = useState(0);

  const setActiveState = (currentSlug: string): number => {
    if (currentSlug.includes("user")) return 1;
    // else if (currentSlug.includes("showcase")) return 2;
    else return 0;
  };

  useEffect(() => {
    setRoute(setActiveState(slug));
  });

  const on = "bg-main text-black";
  const off = "bg-[#212121]";

  return (
    <nav className="grid grid-cols-1 md:grid-cols-10">
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
        className={`col-span-2 h-full flex-col gap-14 fixed w-full md:static backdrop-blur-md z-20 ${
          dot ? "flex md:hidden" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-8 py-14 px-10 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Nav2 className="w-14 mb-4" />
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

          <div className="p-3 rounded-md flex items-center gap-2 w-40">
            <Settings className="w-7" /> <p className="w-full">Settings</p>
            <ArrowDown className="w-5" />
          </div>

          <div className="p-3 rounded-md flex items-center gap-2 w-40">
            <Logout className="w-5" /> <p className="w-full">Sign Out</p>
            <ArrowDown className="w-5" />
          </div>
        </div>
      </div>

      <div
        onClick={() => setStrip(false)}
        style={{
          background:
            "radial-gradient(87.25% 55.2% at 100% 100%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className={`col-span-2 h-full md:flex flex-col gap-8 fixed w-full md:static backdrop-blur-md z-20 ${
          strip ? "md:flex" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center">
          <Logo className="h-32" />
        </div>

        <div className="flex flex-col gap-6 p-[25px] text-[#A4A4A4]">
          <div className="p-3 rounded-md bg-[#212121] mb-4 flex justify-between items-center gap-2">
            <div className="flex gap-2">
              <Search className="w-5" /> Search
            </div>
            <Shortcut className="w-5" />
          </div>
          <Link
            href={"/"}
            onClick={eventDefault}
            className={`p-3 rounded-md mb-4 flex items-center gap-2 pointer text-[#A4A4A4] ${
              route == 0 ? on : off
            }`}
          >
            {route == 0 ? <Nav1on className="w-5" /> : <Nav1 className="w-5" />}
            Overview
          </Link>
          <div className="flex flex-col">
            <div
              onClick={() => setUsers(!users)}
              className={`p-3 rounded-md flex items-center gap-2 pointer ${
                route == 1 ? on : off
              }`}
            >
              {route == 1 ? (
                <Nav2on className="w-5" />
              ) : (
                <Nav2 className="w-5" />
              )}{" "}
              <p className="w-full">Users</p>
              <ArrowDown className={`w-6 ${users && "rotate-180"}`} />
            </div>
            {users && (
              <div className="flex flex-col gap-6 pt-6 px-10">
                <Link onClick={eventDefault} href={"/user"}>
                  <p
                    className={`${
                      route == 1 ? "text-white" : "text-[#A4A4A4]"
                    }`}
                  >
                    User
                  </p>
                </Link>
                <p className="pointer">Role</p>
              </div>
            )}
          </div>
          <div className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]">
            <Nav3 className="w-5" /> <p className="w-full">Business</p>
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => setTeams(!teams)}
              className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]"
            >
              <Nav4 className="w-5" /> <p className="w-full">Teams</p>
              <ArrowDown className={`w-6 ${teams && "rotate-180"}`} />
            </div>
            {teams && (
              <div className="flex flex-col gap-6 pt-6 px-10">
                <p className="pointer">Owner</p>
                <p className="pointer">Barber</p>
              </div>
            )}
          </div>
          <div className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]">
            <Nav5 className="w-5" /> <p className="w-full">Services</p>
          </div>
          <div className="flex flex-col">
            <div
              onClick={() => setBooking(!booking)}
              className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]"
            >
              <Nav6 className="w-5" /> <p className="w-full">Booking</p>
              <ArrowDown className={`w-6 ${booking && "rotate-180"}`} />
            </div>
            {booking && (
              <div className="flex flex-col gap-6 pt-6 px-10">
                <p className="pointer">List</p>
                <p className="pointer">Calendar</p>
              </div>
            )}
          </div>
          <div className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]">
            <Nav7 className="w-5" /> <p className="w-full">Customer</p>
          </div>
          <div className="p-3 rounded-md flex items-center gap-2 pointer bg-[#212121]">
            <Nav8 className="w-5" /> <p className="w-full">Marketing</p>
          </div>
        </div>
      </div>

      <div className="col-span-8 h-full flex flex-col p-6 md:p-8">
        <div className="hidden md:flex py-6 md:py-8 items-center justify-between">
          <h2>Overview</h2>

          <div className="flex gap-8">
            <div className="flex items-center gap-4">
              <h3 className="text-white">Dark Mode</h3>
              <div className="bg-[#212121] flex rounded-full">
                <div className="w-8"></div>
                <div className="bg-main w-4 h-4 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center relative">
              <div className="flex items-center gap-8">
                <div
                  onClick={() => setNotif(!notif)}
                  className="pointer bg-[#212121] p-3 rounded-md"
                >
                  <Bell className="w-6" />
                </div>
                <div className="pointer bg-[#212121] p-3 rounded-md">
                  <Nav2 className="w-6" />
                </div>
                <div className="flex flex-col items-center">
                  <p>Administrator</p>
                </div>
              </div>
              <div onClick={() => setDot(!dot)} className="py-4 px-8 pointer">
                <Dots className="h-6" />
              </div>
              {notif && (
                <div
                  style={{
                    background: "rgba(54, 54, 54, 0.8)",
                  }}
                  className="absolute -left-96 top-14 rounded-md p-6 gap-4 flex flex-col items-center 
               opacity-0 translate-y-[-20px] transition-all duration-300 ease-in-out
               animate-[fadeInDrop_0.3s_ease-in-out_forwards] backdrop-blur-md"
                >
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Person className="w-7" />
                    <p className="w-72">
                      New Incoming Booking From AldovaGuswantri / Booking Number
                      43823d3
                    </p>
                    <Trash className="w-7" />
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Person className="w-7" />
                    <p className="w-72">
                      New Incoming Booking From AldovaGuswantri / Booking Number
                      43823d3
                    </p>
                    <Trash className="w-7" />
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Person className="w-7" />
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
                    background: "rgba(54, 54, 54, 0.8)",
                  }}
                  className="absolute right-0 top-14 rounded-md p-6 gap-4 flex flex-col
               opacity-0 translate-y-[-20px] transition-all duration-300 ease-in-out
               animate-[fadeInDrop_0.3s_ease-in-out_forwards] backdrop-blur-md"
                >
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Settings className="w-5" />
                    <p>Settings</p>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Nav2 className="w-5" />
                    <p>Profile</p>
                  </div>
                  <div className="p-3 rounded-md flex items-center gap-2">
                    <Logout className="w-5" />
                    <p>Sign Out</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {children}
      </div>
    </nav>
  );
}
