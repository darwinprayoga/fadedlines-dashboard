"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "../svg/arrow-down";
import { Stepper } from "../svg/stepper";
import { format } from 'date-fns';
import { getBarberList, getBookingList } from "@/app/utils/api/fadedlinesApis";

const channels = [
  { id: 1, name: 'Organic' },
  { id: 2, name: 'Meta' },
  { id: 3, name: 'Tiktok' },
  { id: 4, name: 'Google' }
]

const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');

export default function Calendar() {
  const today = new Date()
  const threeDaysLater = new Date();
  const oneDaysBefore = new Date();
  threeDaysLater.setDate(today.getDate() + 4);
  oneDaysBefore.setDate(today.getDate() - 1);
  const containerRef: any = useRef(null);
  const [details, setDetails] = useState(false);
  const [barbers, setBarbers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedBarber, setSelectedBarber] = useState('ALL');
  const [selectedBarberId, setSelectedBarberId] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('Organic');
  const [selectedStartDate, setSelectedStartDate] = useState(oneDaysBefore);
  const [selectedEndDate, setSelectedEndDate] = useState(threeDaysLater);
  const [dates, setDates] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);

  const handleStartDateChange = (event: any) => {
    setSelectedStartDate(new Date(event.target.value));
  };

  const handleEndDateChange = (event: any) => {
    setSelectedEndDate(new Date(event.target.value));
  };

  const handleSelectBarber = (barberName: string, barberId: string) => {
    const firstName = barberName.split(' ')[0]
    setSelectedBarber(firstName);
    setSelectedBarberId(barberId)
  };


  const handleSelectChannel = (channelName: string) => {
    setSelectedChannel(channelName);
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookingList(selectedBarberId, selectedStartDate.toISOString(), selectedEndDate.toISOString(), selectedChannel);

        setBookings(data);
      } catch (err) {
        setError('Failed to fetch bookings');
        console.error(err);
      }
    };

    fetchBookings();
  }, [selectedStartDate, selectedEndDate, selectedBarberId, selectedChannel]);


  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const start = new Date(selectedStartDate);
      const end = new Date(selectedEndDate);

      const range = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      const tempDates = [];

      for (let i = 0; i <= range; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        tempDates.push({
          date: date.toISOString().split('T')[0]
        });
      }

      setDates(tempDates);
    }
  }, [selectedStartDate, selectedEndDate]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBarberList();
        setBarbers(data.team_member_booking_profiles);
      } catch (err) {
        setError('Failed to fetch barber list');
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h3 className="text-white">Upcoming Bookings</h3>

        <div className="flex gap-4">
          <p>Start Date</p>
          <div className="relative group w-full">
            <input
              type="date"
              value={formatDate(selectedStartDate)}
              onChange={handleStartDateChange}
              className="bg-[#3E3E3E] p-2 text-white rounded-md w-[200px] cursor-pointer"
            />
          </div>

          <p>End Date</p>
          <div className="relative group w-full">
            <input
              type="date"
              value={formatDate(selectedEndDate)}
              onChange={handleEndDateChange}
              className="bg-[#3E3E3E] p-2 text-white rounded-md w-[200px] cursor-pointer"
            />
          </div>


          <div className="relative group w-full">
            <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[179px]">
              {selectedBarber}
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[179px] left-0 rounded-b-md divide-y divide-[#424242]">
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className="px-2 py-1 cursor-pointer hover:bg-[#505050]"
                  onClick={() => handleSelectBarber(barber.display_name, barber.team_member_id)}
                >
                  <p className="pointer">{barber.display_name.split(' ')[0]}</p>
                </div>
              ))}
              <div className="px-2 py-1">
                <button className="bg-main w-full text-[#3E3E3E]">
                  Add User
                </button>
              </div>
            </div>
          </div>

          <div className="relative group w-full">
            <div className="bg-[#3E3E3E] p-2 text-white rounded-md flex justify-between relative z-10 w-[179px]">
              {selectedChannel}
              <ArrowDown className="w-5 group-hover:rotate-180" />
            </div>

            <div className="hidden group-hover:flex flex-col shadow-md absolute top-4 pt-6 bg-[#343434] text-white w-[179px] left-0 rounded-b-md divide-y divide-[#424242]">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className="px-2 py-1 cursor-pointer hover:bg-[#505050]"
                  onClick={() => handleSelectChannel(channel.name)}
                >
                  <p className="pointer">{channel.name}</p>
                </div>
              ))}
              <div className="px-2 py-1">
                <button className="bg-main w-full text-[#3E3E3E]">
                  Add User
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

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
        className="w-full rounded-md overflow-y-auto"
      >
        <table className="w-full overflow-x-auto py-8 px-4 rounded-md">
          <thead>
            <tr>
              <th className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-20 text-center">
                <h3 className="text-white">All Day</h3>
              </th>
              {dates.map((date) => (
                <th key={date.date} className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-40 text-center">
                  <h3 className="text-white">{date.date}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3E3E3E]">
            <tr>
              <th className="p-5 hover:bg-white/5 border-r border-[#3E3E3E] w-20 text-center">
                <h3 className="text-white"></h3>
              </th>
              {dates.map((date) => (
                <td key={date.date} className="p-5 border-r border-[#3E3E3E] items-center text-center min-w-[300px] max-w-[310px]">
                  {bookings
                    .filter(booking => booking.time.startsWith(date.date))
                    .map((booking) => (
                      <div
                        style={{
                          background: booking.color,
                          borderRadius: '0.375rem',
                          padding: '1rem',
                          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                          cursor: 'pointer',
                        }}
                        onClick={() => setDetails(true)}
                        key={booking.time} className="bg-[#3E3E3E] shadow-sm rounded-md px-6 py-4 flex flex-col w-full m-2">
                        <p>{new Date(booking.time).toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney', hour: '2-digit', minute: '2-digit' })}</p>
                        <b>{booking.name}</b>
                        <p>{booking.barber}</p>
                      </div>
                    ))}
                  {bookings.filter(booking => booking.time.startsWith(date.date)).length === 0 && (
                    <p className="text-gray-500">No bookings</p>
                  )}
                </td>
              ))}
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

