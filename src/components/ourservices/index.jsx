import React from "react";

export default function OurServices() {
  return (
    <>
      <div className="p-20 text-[#27115f]">
      <div class="text-center p-10">
        <h1 class="text-s p-4">WHY WE STAND OUT</h1>
        <p className="text-5xl font-bold">Our Services</p>
      </div>
      <section
        id="services"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class="w-72 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://img.freepik.com/free-photo/doctor-counseling-with-nurse-clinic-desk-checkup-find-patient-diagnosis-clinical-consultation-patient-by-medical-team-wearing-protective-workwear-prescribing-medicine_482257-64623.jpg?t=st=1713348541~exp=1713352141~hmac=fa16b6ef9ff0efbfdd8c914ce89f24b5c2868be5149f3008827523c16ff88b2f&w=360"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl "
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#27115f] font-bold mr-3  text-l">
                Virtual Consultation
              </span>
              <p class="text-s  text-[#27115f] ">
                We offer a convenient, cost-effective, and accessible way for patients to receive timely healthcare services while ensuring continuity of care and maintaining patient privacy and confidentiality.
              </p>
            </div>
          </a>
        </div>
        <div class="w-72 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://img.freepik.com/free-photo/doctor-counseling-with-nurse-clinic-desk-checkup-find-patient-diagnosis-clinical-consultation-patient-by-medical-team-wearing-protective-workwear-prescribing-medicine_482257-64623.jpg?t=st=1713348541~exp=1713352141~hmac=fa16b6ef9ff0efbfdd8c914ce89f24b5c2868be5149f3008827523c16ff88b2f&w=360"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl "
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#27115f] font-bold mr-3  text-l">
                Medical History Management
              </span>
              <p class="text-s  text-[#27115f] ">
                Improved patient care by providing comprehensive and up-to-date information for informed decision-making, enhanced coordination of care across different settings and specialties
              </p>
            </div>
          </a>
        </div>
        <div class="w-72 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://img.freepik.com/free-photo/doctor-counseling-with-nurse-clinic-desk-checkup-find-patient-diagnosis-clinical-consultation-patient-by-medical-team-wearing-protective-workwear-prescribing-medicine_482257-64623.jpg?t=st=1713348541~exp=1713352141~hmac=fa16b6ef9ff0efbfdd8c914ce89f24b5c2868be5149f3008827523c16ff88b2f&w=360"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl "
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#27115f] font-bold mr-3  text-l">
                Specialist Referrals
              </span>
              <p class="text-s  text-[#27115f] ">
                Patients get to consult with healthcare professionals who have advanced training and expertise in specific medical fields or conditions.
              </p>
            </div>
          </a>
        </div>
        <div class="w-72 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://img.freepik.com/free-photo/doctor-counseling-with-nurse-clinic-desk-checkup-find-patient-diagnosis-clinical-consultation-patient-by-medical-team-wearing-protective-workwear-prescribing-medicine_482257-64623.jpg?t=st=1713348541~exp=1713352141~hmac=fa16b6ef9ff0efbfdd8c914ce89f24b5c2868be5149f3008827523c16ff88b2f&w=360"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl "
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#27115f] font-bold mr-3  text-l">
                Health Education Resources
              </span>
              <p class="text-s  text-[#27115f] ">
              Provision of a wealth of information on various health topics, including preventive care, chronic disease management, healthy lifestyle choices, and treatment options.
              </p>
            </div>
          </a>
        </div>
      </section>
      </div>
    </>
  );
}
