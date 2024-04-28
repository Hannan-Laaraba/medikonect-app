import React, { useState, useEffect } from "react";

function PatientProfile() {
  // State variables for patient data
  const [vitals, setVitals] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [treatments, setTreatments] = useState([]);

  // Fetch patient data
  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = async () => {
    try {
      // Mock JSON data...
      const vitalsData = [
        { date: '2024-04-01', cholesterol: 180, sugar: 110, systolic: 120, diastolic: 80 },
        { date: '2024-04-15', cholesterol: 175, sugar: 105, systolic: 118, diastolic: 78 },
        // More data...
      ];
      setVitals(vitalsData);

      const appointmentsData = [
        { id: 1, date: '2024-03-10', reason: 'Checkup' },
        { id: 2, date: '2024-03-25', reason: 'Follow-up' },
        // More data...
      ];
      setAppointments(appointmentsData);

      const diagnosesData = [
        { id: 1, name: 'Hypertension' },
        { id: 2, name: 'Diabetes' },
        // More data...
      ];
      setDiagnoses(diagnosesData);

      const treatmentsData = [
        { id: 1, name: 'Blood Pressure Medication', description: 'Take once a day' },
        { id: 2, name: 'Insulin Injection', description: 'Take before meals' },
        // More data...
      ];
      setTreatments(treatmentsData);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Patient Profile</h2>

      {/* Display vitals */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Vital Signs</h3>
          {/* Display table for vitals */}
          {vitals.length > 0 && (
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-2 py-2 text-left">Date</th>
                    <th className="px-2 py-2 text-left">Cholesterol</th>
                    <th className="px-4 py-2 text-left">Sugar</th>
                    <th className="px-4 py-2 text-left">Blood Pressure (Systolic)</th>
                    <th className="px-4 py-2 text-left">Blood Pressure (Diastolic)</th>
                  </tr>
                </thead>
                <tbody>
                  {vitals.map((entry, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className="border px-4 py-2">{entry.date}</td>
                      <td className="border px-4 py-2">{entry.cholesterol}</td>
                      <td className="border px-4 py-2">{entry.sugar}</td>
                      <td className="border px-4 py-2">{entry.systolic}</td>
                      <td className="border px-4 py-2">{entry.diastolic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Display previous appointments */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Previous Appointments</h3>
          {/* Display a list of previous appointments */}
          {appointments.length > 0 && (
            <ul className="list-disc list-inside">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="mb-2">{appointment.date}: {appointment.reason}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Display diagnoses */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Diagnoses</h3>
          {/* Display a list of diagnoses */}
          {diagnoses.length > 0 && (
            <ul className="list-disc list-inside">
              {diagnoses.map((diagnosis) => (
                <li key={diagnosis.id} className="mb-2">{diagnosis.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Display suggested treatments */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Suggested Treatments</h3>
          {/* Display a list of suggested treatments */}
          {treatments.length > 0 && (
            <ul className="list-disc list-inside">
              {treatments.map((treatment) => (
                <li key={treatment.id} className="mb-2">{treatment.name}: {treatment.description}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
