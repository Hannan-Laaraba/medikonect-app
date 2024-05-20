import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [attendanceConfirmed, setAttendanceConfirmed] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const createAppointment = {
      doctor: doctor,
      date: date,
      time: time,
      reason: reason,
      attendanceConfirmed: attendanceConfirmed,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_MEDIKONECT_API}/appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createAppointment),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Appointment booked successfully!");
        navigate("/appointments");
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center lg:pl-60">
      <div className="w-full max-w-xl p-8 bg-orange-200 rounded-lg shadow-lg">
        <h2 className="text-lg text-center font-bold text-[#27115f] mb-2">
          Appointment Form
        </h2>
        <form onSubmit={onSubmitHandler} className="py-6 px-6">
          <div className="pb-6">
            <label
              htmlFor="doctor"
              className="block text-sm font-medium text-[#27115f]"
            >
              Doctor
            </label>
            <select
              type="text"
              name="doctor"
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="block w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a doctor</option>
              <option
                className="text-gray-700"
                value="Dr. Hannan Abdul-Aziz"
              >
                Dr. Hannan Abdul-Aziz
              </option>
              <option
                className="text-gray-700"
                value="Dr. Fredericka Tettey-Lowor"
              >
                Dr. Fredericka Tettey-Lowor
              </option>
              <option className="text-gray-700" value="Dr. Nadia Kafui">
                Dr. Nadia Kafui
              </option>
              <option className="text-gray-700" value="Dr. D'Angelo Kwakye">
                Dr. D'Angelo Kwakye
              </option>
              <option className="text-gray-700" value="Dr. Kevin Apo-era">
                Dr. Kevin Apo-era
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-[#27115f]"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-[#27115f]"
              >
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-full px-3 py-2 text-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <label
            htmlFor="reason"
            className="block text-sm font-medium text-[#27115f]"
          >
            Reason
          </label>
          <input
            type="text"
            name="reason"
            id="reason"
            placeholder="Reason for appointment"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pb-2"
          />
          <br />
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-[#27115f]   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
