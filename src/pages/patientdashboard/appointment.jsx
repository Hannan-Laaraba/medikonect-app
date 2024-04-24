import React, { useState, useEffect } from "react";
import axios from "axios";

export const appointmentlist = [
  {
    id: "1",
    // name: "Laaraba",
    doctor: "Dr. Hannan",
    date: "2024-04-24",
    time: "09:00",
    reason: "Checkup",
    status: "scheduled",
    createdAt: "2024-04-24T09:00:00Z",
  },
  {
    id: "2",
    // name: "Ashrawee",
    doctor: "Dr. Nadia Kafui",
    date: "2024-04-26",
    time: "10:00",
    reason: "Follow-up",
    status: "confirmed",
    createdAt: "2024-04-23T10:00:00Z",
  },
  {
    id: "3",
    // name: "Ashrawee",
    doctor: "Dr. D'Angelo",
    date: "2024-04-26",
    time: "10:00",
    reason: "Follow-up",
    status: "cancelled",
    createdAt: "2024-04-23T10:00:00Z",
  },
  {
    id: "4",
    // name: "Ashrawee",
    doctor: "Dr. Samantha",
    date: "2024-04-26",
    time: "10:00",
    reason: "Follow-up",
    status: "confirmed",
    createdAt: "2024-04-23T10:00:00Z",
  },
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
    status: "scheduled",
  });

  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setAppointments(appointmentlist); // Initialize appointments state with dummy data
  }, []);

  // useEffect(() => {
  //   // f appointments from the backend
  //   fetchAppointments();
  // }, []);
  // const fetchAppointments = async () => {
  //   try {
  //     const response = await axios.get("/api/appointments"); // Make GET request to fetch appointments
  //     setAppointments(response.data); // Update appointments state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching appointments:", error);
  //   }
  // };

  //  form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/appointments", formData);
      setAppointments([...appointments, response.data]);
      resetForm();
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  // editing an appointment
  const handleEdit = (id) => {
    const appointmentToEdit = appointments.find(
      (appointment) => appointment.id === id
    );
    setFormData(appointmentToEdit);
    setEditingId(id);
  };

  // deleting an appointment
  const handleDelete = (id, createdAt) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - createdAt;

    const timeThreshold = 24 * 60 * 60 * 1000;
    //  if the time difference is less than the 24hrs
    if (timeDifference < timeThreshold) {
      // Allow deletion
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
    } else {
      // message for when deletion is not allowed
      console.log(
        "Appointment cannot be deleted as it has exceeded the time threshold."
      );
    }
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      id: null,
      name: "",
      doctor: "",
      date: "",
      time: "",
      reason: "",
      status: "scheduled",
      createdAt: new Date().getDate(),
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const toggleMarkForDeletion = (index) => {
  //   const updatedAppointments = [...appointments];
  //   updatedAppointments[index].markedForDeletion =
  //     !updatedAppointments[index].markedForDeletion;
  //   setAppointments(updatedAppointments);
  // };

  return (
    <>
      <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="mt-8">
          <h2 className="text-lg text-center font-bold mb-4">Existing Appointments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-pink-300">
                  {/* <th className="px-4 py-2">Name</th> */}
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, id) => (
                  <tr key={appointment.id}  className={id % 2 === 0 ? "bg-white" : "bg-pink-100"}>
                    {/* <td className="px-4 py-2">{appointment.name}</td> */}
                    <td className="px-4 py-2">{appointment.doctor}</td>
                    <td className="px-4 py-2">{appointment.date}</td>
                    <td className="px-4 py-2">{appointment.time}</td>
                    <td className="px-4 py-2">{appointment.reason}</td>
                    <td className="px-4 py-2">{appointment.status}</td>
                    <td className="px-4 py-2">
                      <button
                        className=""
                        onClick={() => handleEdit(appointment.id)}
                      >
                        <i class="fa-solid fa-pen text-blue-500 pr-3"></i>
                      </button>
                      <button
                        className=""
                        onClick={() =>
                          handleDelete(appointment.id, appointment.createdAt)
                        }
                      >
                        <i class="fa-solid fa-trash text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-lg text-center font-bold mb-4"> Appointment Form</h2>
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
                for="name"
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
              </div>
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
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
          </form>
        </div>
      </div>
    </>
  );
}
