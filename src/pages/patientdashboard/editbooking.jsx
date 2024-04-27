import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBooking() {
  const params = useParams();

//   const [name, setName] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [reason, setReason] = useState(null);

  const navigate = useNavigate();

  const getAppointment = async (e) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MEDIKONECT_API}/appointments/${params.id}`
      );
      const data = await response.json();
    //   setName(data.name);
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
    //   name: name,
      doctor: doctor,
      date: date,
      time: time,
      reason: reason,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MEDIKONECT_API}/appointments/${params.id}`,
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
      navigate("/appointment");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointment();
  }, [params.id]);

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[850px] text-[#27115f] bg-gray-100 p-8 rounded-lg shadow-md">
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
                    value= {time}
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
