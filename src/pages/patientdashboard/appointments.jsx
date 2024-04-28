import axios from "axios";
import { useState, useEffect } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:5050/appointments");
        setAppointments(response.data); // Assuming data is an array of appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/appointments/${id}`);
      // If deletion is successful, update the state or fetch appointments again
      // Example: fetchAppointments();
      window.location.reload(); // Reload the page after successful deletion
    } catch (error) {
      console.error("Error deleting appointment:", error);
      // Handle error, maybe show a notification to the user
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-orange-100 p-8 rounded-lg shadow-md">
        <div className="mt-8">
          <h2 className="text-lg text-center font-bold mb-4">Standing Appointments</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-orange-200">
                  <th className="px-4 py-2">Doctor</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Time</th>
                  <th className="px-4 py-2">Reason</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} className={appointment.id % 2 === 0 ? "bg-white" : "bg-orange-100"}>
                    <td className="px-4 py-2">{appointment.doctor}</td>
                    <td className="px-4 py-2">{appointment.date}</td>
                    <td className="px-4 py-2">{appointment.time}</td>
                    <td className="px-4 py-2">{appointment.reason}</td>
                    <td className="px-4 py-2">
                      <button className="" onClick={() => handleDelete(appointment.id)}>
                        <i className="fa-solid fa-trash text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
