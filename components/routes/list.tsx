"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "../svg/arrow-down";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";
import { Trash } from "../svg/trash";
import { X } from "../svg/x";

export default function List() {
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
        <h3 className="text-white">Upcoming Bookings</h3>

        <div className="flex gap-4">
          <div className="bg-[#3E3E3E] flex items-center rounded-md py-2 px-4 gap-6">
            <p>All Barbers</p>
            <ArrowDown className="w-5" />
          </div>

          <div className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-4">
            <Search className="w-5" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find Booking"
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
            <h1 className="text-white font-medium">Booking Information</h1>

            <p>Client Details</p>

            <div className="flex flex-col gap-4">
              <div className="p-2 w-full bg-[#3E3E3E] flex justify-center rounded-md">
                Name
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Email
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Password
                  </div>
                </div>
              </div>
            </div>

            <p>Booking Details</p>

            <div className="flex flex-col gap-4 w-[504px]">
              <div className="flex w-full">
                <div className="p-2 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Date & Time
                </div>
                <div className="p-2 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  9 September at 2:00 Pm
                </div>
              </div>

              <div className="flex w-full">
                <div className="p-10 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Notes
                </div>
                <div className="p-10 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  I want perfect haircut, good service.
                </div>
              </div>

              <button className="bg-main text-black w-full">
                Edit Details in SquareUP
              </button>
            </div>

            <p>Service Details</p>

            <div className="flex flex-col gap-4 w-[504px]">
              <div className="flex w-full">
                <div className="p-2 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Service Name
                </div>
                <div className="p-2 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  Hair & Beard Transformation
                </div>
              </div>

              <div className="flex w-full">
                <div className="p-2 w-1/4 bg-[#3E3E3E] flex justify-center rounded-md rounded-r-none">
                  Barber
                </div>
                <div className="p-2 w-3/4 bg-[#272727] flex justify-center rounded-md rounded-l-none">
                  Anthony Campanelli
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Duration : 45 Minutes
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                    Amount : 60 AUD
                  </div>
                </div>
              </div>

              <div className="p-2 w-full bg-[#3E3E3E] flex justify-center rounded-md">
                Tax (2%) : 1.2 AUD
              </div>

              <div className="p-2 w-full bg-[#3E3E3E] flex justify-center rounded-md">
                Total : 61.2 AUD
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
