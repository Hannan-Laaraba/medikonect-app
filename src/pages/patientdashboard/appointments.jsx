import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_MEDIKONECT_API}/appointments`);
        const data = await response.json();
        setAppointments(data); // Assuming data is an array of appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []); 

  //  handle edit and delete actions
  const handleEdit = (id) => {
    navigate("/editbooking");
   };

  const handleDelete = (id) => {
    // Handle delete action, e.g., send delete request to backend
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-orange-100 p-8 rounded-lg shadow-md">
        <div className="mt-8">
          <h2 className="text-lg text-center font-bold mb-4">
            Existing Appointments
          </h2>
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
                  <tr
                    key={appointment.id}
                    className={
                      appointment.id % 2 === 0 ? "bg-white" : "bg-red-200"
                    }
                  >
                    <td className="px-4 py-2">{appointment.doctor}</td>
                    <td className="px-4 py-2">{appointment.date}</td>
                    <td className="px-4 py-2">{appointment.time}</td>
                    <td className="px-4 py-2">{appointment.reason}</td>
                    <td className="px-4 py-2">
                      <button
                        className=""
                        onClick={() => handleEdit(appointment.id)}
                      >
                        <i className="fa-solid fa-pen text-blue-500 pr-3"></i>
                      </button>
                      <button
                        className=""
                        onClick={() => handleDelete(appointment.id)}
                      >
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
