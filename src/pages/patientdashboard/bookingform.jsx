import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  // const [name, setName] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [reason, setReason] = useState(null);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const createAppointment = {
      // name: name,
      doctor: doctor,
      date: date,
      time: time,
      reason: reason,
    };
    try {
      const response = await fetch(
        `http://localhost:5050/appointments`,
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
      // navigate("/appointments");
      if (response.ok) {
        // Show an alert
        alert("Appointment booked successfully!");
        // Optionally, navigate to another page
        // navigate("/appointments");
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="mx-auto w-full max-w-[1050px] text-[#27115f] bg-orange-200 p-12 rounded-lg shadow-md">
          <h2 className="text-lg text-center font-bold mb-4">
            {" "}
            Appointment Form
          </h2>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-5">
              {/* <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              /> */}
            </div>
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

            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
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
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="time"
                    class="mb-3 block text-base font-medium text-[#07074D]"
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
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Reason
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="  "
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* <div className="mb-5">
              <label
                htmlFor="status"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Appointment Status
              </label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option value="scheduled">Scheduled</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div> */}
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Appointment
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
