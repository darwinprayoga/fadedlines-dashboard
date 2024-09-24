import { Add } from "../svg/add";
import { Search } from "../svg/search";
import { Stepper } from "../svg/stepper";
import { Trash } from "../svg/trash";

export default function Customer() {
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
                <input type="date" className="bg-transparent" />
              </td>
              <td className="p-3 px-5">
                <input type="date" className="bg-transparent" />
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
                  type="button"
                  className="mr-3 text-sm bg-[#923B3B] hover:shadow-none py-3 px-5 h-min"
                >
                  <Trash className="w-5" />
                </button>
                <button
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
