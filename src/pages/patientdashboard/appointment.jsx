import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
    status: "scheduled",
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  handle form submission
    console.log("Form submitted:", formData);
    // send formData to your backend
    //  add the new appointment to the list of appointments
    setAppointments([...appointments, formData]);
    // Reset form fields
    setFormData({
      name: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
      status: "scheduled",
    });
  };

  const handleDelete = () => {
    // Filter out appointments that are not marked for deletion
    const updatedAppointments = appointments.filter(
      (appointment) => !appointment.markedForDeletion
    );
    setAppointments(updatedAppointments);
  };

  const toggleMarkForDeletion = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].markedForDeletion =
      !updatedAppointments[index].markedForDeletion;
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[1050px] bg-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-5">
              <label
                for="phone"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Doctor
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Doctor's Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
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
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
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
                    placeholder="Give your doctor more information"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
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
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Appointment
              </button>
            </div>
            {/* <div className="mb-5">
              <button
                type="button"
                onClick={handleDelete}
                className="w-full rounded-md bg-red-500 py-3 px-6 text-center text-base font-semibold text-white outline-none"
              >
                Delete Selected Appointments
              </button>
            </div> */}
          </form>

          {/* existing appointments
          {appointments.map((appointment, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div>
                <p>Name: {appointment.name}</p>
                <p>Phone: {appointment.phone}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
                <p>Reason: {appointment.reason}</p>
              </div>
              <div>
                
                <input
                  type="checkbox"
                  checked={appointment.markedForDeletion}
                  onChange={() => toggleMarkForDeletion(index)}
                />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
