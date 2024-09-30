"use client";

import { useEffect, useRef, useState } from "react";
import { Add } from "../svg/add";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";
import { Trash } from "../svg/trash";
import { X } from "../svg/x";
import { ArrowDown } from "../svg/arrow-down";

export default function Customer() {
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
        <h3 className="text-white">Customer Table</h3>

        <div className="flex gap-4">
          <div className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-4">
            <Search className="w-5" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find Customer"
              className="bg-[#3E3E3E]"
            />
          </div>
        </div>
      </div>

      {remove && (
        <div className="fixed inset-0 z-20 backdrop-blur-md bg-black/10 flex justify-center items-center">
          <div
            ref={containerRef}
            id="container"
            className="bg-[#363636] p-10 rounded-xl flex flex-col items-center gap-10 shadow-md w-1/3"
          >
            <h1 className="text-white font-medium">Delete Booking</h1>

            <div className="flex flex-col items-center text-center gap-4">
              <p>
                Warning: You are about to delete this booking appointment. This
                action is permanent and cannot be undone. The appointment
                details, including any associated notes or history will be
                permanently removed.
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
                <p>Customer</p>
                <X className="w-3" />
              </div>
            </div>

            <h1 className="text-white font-medium">Customer Activity</h1>

            <p>Service Details</p>

            <div className="flex flex-col gap-4 w-[504px]">
              <div className="flex w-full">
                <div className="p-2 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Total Bookings
                </div>
                <div className="p-2 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  12
                </div>
              </div>

              <div className="flex w-full">
                <div className="p-2 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Last Booking
                </div>
                <div className="p-2 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  8 Sept 2024
                </div>
              </div>
            </div>

            <p>Last Booking</p>

            <div className="p-10 w-[504px] bg-[#272727] flex flex-col gap-4 rounded-md">
              <div className="flex justify-between">
                <p>Service Name:</p> <p>Hair & Beard Transformation</p>
              </div>
              <div className="flex justify-between">
                <p>Barber:</p> <p>Josh</p>
              </div>

              <div className="bg-[#3E3E3E] w-full h-[1px]"></div>

              <div className="flex justify-between">
                <p>Price:</p> <p>115 AUD</p>
              </div>

              <div className="bg-[#3E3E3E] w-full h-[1px]"></div>

              <div className="flex justify-between">
                <p>Channel:</p> <p>Meta Ads</p>
              </div>
            </div>

            <p>Additional Information</p>

            <div className="p-10 w-[504px] bg-[#272727] flex flex-col gap-4 rounded-md">
              <div className="flex justify-between">
                <p>Created:</p> <p>5th September 2024</p>
              </div>
              <div className="flex justify-between">
                <p>Source:</p> <p>API</p>
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
              <th className="text-left p-3 px-5">Last Visited</th>
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
                  className="bg-transparent w-60"
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
                  value="3 months ago"
                  className="bg-transparent"
                />
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
