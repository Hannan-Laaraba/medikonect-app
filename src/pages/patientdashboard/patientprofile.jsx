import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

function PatientProfile() {
  const [vitals, setVitals] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    fetchPatientData();
  }, []);

  const fetchPatientData = async () => {
    try {
      // Mock JSON data...
      const vitalsData = [
        { date: '2024-04-01', cholesterol: 180, sugar: 110, systolic: 120, diastolic: 80, temperatureCelsius: 37 },
        { date: '2024-04-02', cholesterol: 175, sugar: 105, systolic: 118, diastolic: 78, temperatureCelsius: 37.2 },
        { date: '2024-04-03', cholesterol: 170, sugar: 100, systolic: 116, diastolic: 76, temperatureCelsius: 36.9 },
        { date: '2024-04-04', cholesterol: 165, sugar: 95, systolic: 114, diastolic: 74, temperatureCelsius: 37.5 },
        { date: '2024-04-05', cholesterol: 160, sugar: 90, systolic: 112, diastolic: 72, temperatureCelsius: 37.1 },
        // Add more data as needed...
      ];

      setVitals(vitalsData);
      renderMixedChart();
      const appointmentsData = [
        { id: 1, date: '10/Jan/2024', reason: 'Checkup' },
        { id: 2, date: '15/Feb/2024', reason: 'Follow-up' },
        { id: 3, date: '5/March/2024', reason: 'Consultation' },
        // More data...
      ];
      setAppointments(appointmentsData);

      const diagnosesData = [
        { id: 1, name: 'Hypertension' },
        { id: 2, name: 'Diabetes' },
        { id: 3, name: 'Hypercholesterolemia' },
        // More data...
      ];
      setDiagnoses(diagnosesData);

      const treatmentsData = [
        { id: 1, name: 'Amlodipine', description: 'Take once a day' },
        { id: 2, name: 'Insulin Injection', description: 'Take before meals' },
        { id: 3, name: 'Metformin', description: 'Take daily' },
        // More data...
      ];
      setTreatments(treatmentsData);
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const renderMixedChart = () => {
    const mixedCtx = document.getElementById('mixedChart');
    if (mixedCtx) {
      new Chart(mixedCtx, {
        type: 'line',
        data: {
          datasets: [{
            type: 'line',
            label: 'Cholesterol Level',
            data: [180, 175, 170, 165, 160],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }, {
            type: 'bar',
            label: 'Temperature (°C)',
            data: [37, 37.2, 36.9, 37.5, 38],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }],
          // labels: vitals.map(entry => entry.date)
          labels: ['Jan', 'February', 'March', 'April', 'May ']
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });
    }
  };

  return (
    <div className="container mx-auto text-[#27115f]">
      {/* Display previous appointments, diagnoses, and suggested treatments */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Patient Details</h3>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Previous Appointments</th>
                <th className="px-4 py-2 text-left">Diagnoses</th>
                <th className="px-4 py-2 text-left">Suggested Treatments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  {/* Display a list of previous appointments */}
                  {appointments.length > 0 && (
                    <ul className="list-disc list-inside">
                      {appointments.map((appointment) => (
                        <li key={appointment.id} className="mb-2">{appointment.date}: {appointment.reason}</li>
                      ))}
                    </ul>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {/* Display a list of diagnoses */}
                  {diagnoses.length > 0 && (
                    <ul className="list-disc list-inside">
                      {diagnoses.map((diagnosis) => (
                        <li key={diagnosis.id} className="mb-2">{diagnosis.name}</li>
                      ))}
                    </ul>
                  )}
                </td>
                <td className="border px-4 py-2">
                  {/* Display a list of suggested treatments */}
                  {treatments.length > 0 && (
                    <ul className="list-disc list-inside">
                      {treatments.map((treatment) => (
                        <li key={treatment.id} className="mb-2">{treatment.name}: {treatment.description}</li>
                      ))}
                    </ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Display mixed chart */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Temperature and Cholesterol Over Time</h3>
          <div className="overflow-x-auto">
            <canvas id="mixedChart" className="min-w-full" width="400" height="200"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
