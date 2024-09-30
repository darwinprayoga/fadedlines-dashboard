"use client";

import { useEffect, useRef, useState } from "react";
import { Add } from "../svg/add";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";
import { Trash } from "../svg/trash";
import { Next } from "../svg/next";
import { Back } from "../svg/back";
import { ArrowDown } from "../svg/arrow-down";
import { X } from "../svg/x";

export default function User() {
  const [create, setCreate] = useState(false);
  const [remove, setRemove] = useState(false);
  const [details, setDetails] = useState(false);
  const [step, setStep] = useState(1);
  const containerRef: any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setCreate(false); // Close the modal
        setRemove(false); // Close the modal
        setDetails(false); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h3 className="text-white">User Table</h3>

        <div className="flex gap-4">
          <div className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-4">
            <Search className="w-5" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find User"
              className="bg-[#3E3E3E]"
            />
          </div>

          <div
            onClick={() => setCreate(true)}
            className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-6 pointer"
          >
            <div className="w-4"></div>
            <p>Add User</p>
            <Add className="w-5" />
          </div>
        </div>
      </div>
      {create && (
        <div className="fixed inset-0 z-20 backdrop-blur-md bg-black/10 flex justify-center items-center">
          <div
            ref={containerRef}
            id="container"
            className="bg-[#363636] p-10 rounded-xl flex flex-col items-center gap-10 shadow-md"
          >
            <h1 className="text-white font-medium">Create User</h1>

            {step == 1 ? (
              <div className="flex flex-col gap-4">
                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Phone"
                  type="tel"
                />
                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Address"
                  type="text"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4">
                  <input
                    className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                    placeholder="Password"
                    type="password"
                  />
                  <input
                    className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                    placeholder="Confirm Password"
                    type="password"
                  />
                  <p>Assign Roles</p>

                  <div className="relative group w-full">
                    <div className="bg-[#272727] p-2 text-[#3E3E3E] rounded-md flex justify-between relative z-10">
                      Role
                      <ArrowDown className="w-5 group-hover:rotate-180" />
                    </div>

                    <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242]">
                      <div className="px-2 py-1">
                        <p className="pointer">Admin</p>
                      </div>
                      <div className="px-2 py-1">
                        <p className="pointer">Owner</p>
                      </div>
                      <div className="px-2 py-1">
                        <p className="pointer">Barber</p>
                      </div>
                      <div className="px-2 py-1">
                        <p className="pointer">Marketer</p>
                      </div>
                      <div className="px-2 py-1">
                        <button className="bg-main w-full text-[#3E3E3E]">
                          Add Role
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                    <p>Admin</p>
                    <X className="w-3" />
                  </div>
                  <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                    <p>Owner</p>
                    <X className="w-3" />
                  </div>
                  <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                    <p>Customer</p>
                    <X className="w-3" />
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2">
              <Back onClick={() => setStep(1)} className="w-5 pointer" />
              <div className="flex gap-1">
                <div
                  className={`bg-main rounded-full w-2 h-2 ${
                    step == 2 && "order-last"
                  }`}
                ></div>
                <div className="bg-[#474747] rounded-full w-2 h-2"></div>
              </div>
              <Next onClick={() => setStep(2)} className="w-5 pointer" />
            </div>

            <button
              disabled={step == 1}
              className="text-[#212121] disabled:shadow-none bg-main disabled:bg-[#3E3E3E]"
            >
              Add User
            </button>
          </div>
        </div>
      )}

      {remove && (
        <div className="fixed inset-0 z-20 backdrop-blur-md bg-black/10 flex justify-center items-center">
          <div
            ref={containerRef}
            id="container"
            className="bg-[#363636] p-10 rounded-xl flex flex-col items-center gap-10 shadow-md w-1/3"
          >
            <h1 className="text-white font-medium">Delete User</h1>

            <div className="flex flex-col items-center text-center gap-4">
              <p>
                Warning: You are about to permanently delete this user. This
                action cannot be undone, and all associated data, including user
                activities, preferences, and history, will be lost.
              </p>

              <p>Are you sure you want to proceed?</p>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#404040] hover:shadow-none">Cancel</button>
              <button className="bg-[#923B3B] hover:shadow-none">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {details && (
        <div className="fixed inset-0 z-20 backdrop-blur-md bg-black/10 flex justify-center items-center">
          <div
            ref={containerRef}
            id="container"
            className="bg-[#363636] p-10 rounded-xl flex flex-col justify-start items-center gap-10 shadow-md w-1/2 h-4/5 overflow-y-scroll"
          >
            <h1 className="text-white font-medium">Personal Information</h1>

            <div className="flex gap-6">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Name
                </div>
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Email
                </div>
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Phone
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Address
                </div>
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Password
                </div>
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Confirm Password
                </div>
              </div>
            </div>

            <p>Assign Roles</p>

            <div className="relative group w-[300px]">
              <div className="bg-[#3E3E3E] p-2 rounded-md flex justify-between relative z-10">
                Role
                <ArrowDown className="w-5 group-hover:rotate-180" />
              </div>

              <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] w-full text-white left-0 rounded-b-md divide-y divide-[#424242]">
                <div className="px-2 py-1">
                  <p className="pointer">Admin</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Owner</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Barber</p>
                </div>
                <div className="px-2 py-1">
                  <p className="pointer">Marketer</p>
                </div>
                <div className="px-2 py-1">
                  <button className="bg-main w-full text-[#3E3E3E]">
                    Add Role
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center w-1/2 gap-2">
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Admin</p>
                <X className="w-3" />
              </div>
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Owner</p>
                <X className="w-3" />
              </div>
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Customer</p>
                <X className="w-3" />
              </div>
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Marketer</p>
                <X className="w-3" />
              </div>
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Barber</p>
                <X className="w-3" />
              </div>
            </div>

            <h1 className="text-white font-medium">User Activity</h1>

            <p>Owner:</p>

            <div className="flex flex-col gap-4">
              <div className="p-2 w-full bg-[#3E3E3E] flex justify-center rounded-md">
                Dummy Fadedlines, Dummy City
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Total Customer: 950
                  </div>
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Meta Booking: 950
                  </div>
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Organic Booking: 950
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    New Customer 25
                  </div>
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Google Booking: 950
                  </div>
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    TikTok Booking: 950
                  </div>
                </div>
              </div>
            </div>

            <p>Barber:</p>

            <div className="flex gap-6">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Active Service: 12
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Total Customer: 46
                </div>
              </div>
            </div>

            <p>Customer:</p>

            <div className="flex gap-6">
              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Total Booking: 12
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                  Last Booking: 8 Sept 2024
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#404040] hover:shadow-none">Cancel</button>
              <button className="bg-main hover:shadow-none text-[#212121]">
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          background:
            "radial-gradient(67.89% 214.12% at 89.4% -6.2%, rgba(54, 54, 54, 0.7) 0%, rgba(23, 23, 23, 0.7) 100%)",
        }}
        className="w-full overflow-x-auto py-8 px-4 rounded-md"
      >
        <table className="w-max text-md text-white">
          <tbody className="divide-y divide-[#3E3E3E]">
            <tr>
              <th className="text-left p-3 px-5">No</th>
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Phone</th>
              <th className="text-left p-3 px-5">Created At</th>
              <th className="text-left p-3 px-5">Updated At</th>
              <th className="text-left p-3 px-5">Role</th>
              <th className="text-left p-3 px-5">Action</th>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>1</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>2</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>3</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>4</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>5</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>6</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>7</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>

            <tr className="hover:bg-white/5">
              <td className="p-3 px-5">
                <p>8</p>
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="DummyName"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="email"
                  value="Dummy@Gmail.com"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="tel"
                  value="6286969696969"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="10/09/2024"
                  className="bg-transparent"
                />
              </td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">Admin</option>
                  <option value="Owner">Owner</option>
                  <option value="Customer">Customer</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button
                  onClick={() => setRemove(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
                  onClick={() => setDetails(true)}
                  type="button"
                  className="mr-3 text-sm bg-[#3E3E3E] hover:shadow-none py-3 px-5 h-min"
                >
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full flex justify-end py-4">
        <Stepper className="w-40" />
      </div>
    </main>
  );
}
