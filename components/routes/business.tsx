"use client";

import { useEffect, useRef, useState } from "react";
import { Add } from "../svg/add";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";
import { Trash } from "../svg/trash";
import { ArrowDown } from "../svg/arrow-down";
import { X } from "../svg/x";

export default function Business() {
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
        <h3 className="text-white">Business Data</h3>

        <div className="flex gap-4">
          <div className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-4">
            <Search className="w-5" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find Business"
              className="bg-[#3E3E3E]"
            />
          </div>

          <div
            onClick={() => setCreate(true)}
            className="bg-[#3E3E3E] flex items-center rounded-md p-2 gap-6 pointer"
          >
            <div className="w-4"></div>
            <p>Add Business</p>
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
            <h1 className="text-white font-medium">Create Business</h1>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-4">
                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Name"
                  type="text"
                />

                <input
                  className="bg-[#272727] placeholder-[#3E3E3E] p-2 rounded-md"
                  placeholder="Address"
                  type="text"
                />
              </div>

              <p>Assign Owner</p>

              <div className="flex flex-col items-center gap-4">
                <div className="relative group w-full">
                  <div className="bg-[#272727] p-2 text-[#3E3E3E] rounded-md flex justify-between relative z-10 w-[179px]">
                    Owner to Assign
                    <ArrowDown className="w-5 group-hover:rotate-180" />
                  </div>

                  <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242]">
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

              <div className="flex gap-2">
                <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                  <p>Christos</p>
                  <X className="w-3" />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-[#404040] hover:shadow-none">Cancel</button>
              <button className="bg-main hover:shadow-none text-[#212121]">
                Create
              </button>
            </div>
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
            <h1 className="text-white font-medium">Delete Business</h1>

            <div className="flex flex-col items-center text-center gap-4">
              <p>
                Warning: You are about to permanently delete this business. This
                action cannot be undone, and all associated data, including
                business activities, preferences, and history, will be lost.
              </p>

              <p>Are you sure you want to continue?</p>
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
            <h1 className="text-white font-medium">Business Information</h1>

            <p>Business Information</p>

            <div className="flex flex-col gap-4">
              <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                Name
              </div>
              <div className="p-2 w-60 bg-[#3E3E3E] flex justify-center rounded-md">
                Location
              </div>
            </div>

            <p>Assign Owner</p>

            <div className="flex flex-col items-center gap-4">
              <div className="relative group w-full">
                <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[240px]">
                  Owner to Assign
                  <ArrowDown className="w-5 group-hover:rotate-180" />
                </div>

                <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-full left-0 rounded-b-md divide-y divide-[#424242]">
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

            <div className="flex gap-2">
              <div className="flex p-2 gap-4 rounded-md bg-[#3E3E3E]">
                <p>Christos</p>
                <X className="w-3" />
              </div>
            </div>

            <p>Business Performance</p>

            <div className="bg-[#272727] w-full flex justify-between p-10">
              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Staff</h3>
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">4</h1>
                  <div className="flex flex-col">
                    <p>Barber: 3</p>
                    <p>Admin: 1</p>
                  </div>
                </div>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Services</h3>
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">12</h1>
                  <div className="flex flex-col">
                    <p>Active: 10</p>
                    <p>Inactive: 2</p>
                  </div>
                </div>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Booking</h3>
                <div className="flex gap-2 items-center">
                  <h1 className="text-white">92</h1>
                  <div className="flex flex-col">
                    <p>Barber: 22</p>
                    <p>Admin: 70</p>
                  </div>
                </div>
              </div>
            </div>

            <p>Marketing</p>

            <div className="bg-[#272727] w-full flex justify-between p-10">
              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Organic</h3>
                <h1 className="text-white">12</h1>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Meta</h3>
                <h1 className="text-white">15</h1>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Google</h3>
                <h1 className="text-white">56</h1>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">Tiktok</h3>
                <h1 className="text-white">32</h1>
              </div>

              <div className="h-full w-[1px] bg-[#3E3E3E]"></div>

              <div className="flex flex-col px-4 gap-2 items-center">
                <h3 className="text-white">New Customer</h3>
                <h1 className="text-white">22</h1>
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
              <th className="text-left p-3 px-5">Location</th>
              <th className="text-left p-3 px-5">Owner</th>
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
                  type="text"
                  value="Melbourne, Oakleigh, Australia"
                  className="bg-transparent w-80"
                />
              </td>
              <td className="p-3 px-5">
                <input
                  type="text"
                  value="Dejan Tomic"
                  className="bg-transparent w-80"
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
