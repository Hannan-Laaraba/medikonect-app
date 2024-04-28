import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBooking() {
  const params = useParams();
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const getAppointment = async () => {
    try {
      const response = await fetch(
        `http://localhost:5050/appointments/${params.id}`
      );
      const data = await response.json();
      setDoctor(data.doctor);
      setDate(data.date);
      setTime(data.time);
      setReason(data.reason);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const editedBooking = {
      doctor: doctor,
      date: date,
      time: time,
      reason: reason,
    };
    try {
      const response = await fetch(
        `http://localhost:5050/appointments/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedBooking),
        }
      );
      const data = await response.json();
      console.log(data);
      navigate("/patientdashboard/appointments");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointment();
  }, [params.id]);

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="mx-auto w-full max-w-[1050px] text-[#27115f] bg-orange-200 p-12 rounded-lg shadow-md">
          <h2 className="text-lg text-center font-bold mb-4">
            {" "}
            Appointment Form
          </h2>
          <form onSubmit={onSubmitHandler}>
            <select
              name="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Hannan Abdul-Aziz">
                Dr. Hannan Abdul-Aziz
              </option>
              <option value="Dr. Fredericka Tettey-Lowor">
                Dr. Fredericka Tettey-Lowor
              </option>
              <option value="Dr. Nadia Kafui">Dr. Nadia Kafui</option>
              <option value="Dr. D'Angelo Kwakye">Dr. D'Angelo Kwakye</option>
              <option value="Dr. Kevin Apo-era">Dr. Kevin Apo-era</option>
            </select>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="..."
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="..."
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="reason"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Reason
              </label>
              <input
                type="text"
                name="reason"
                id="reason"
                placeholder="Enter reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
