// import React, { useState } from "react";
// import Medikonect from "../../asset/medikonect.png";
// import Appointment from "../patientdashboard/appointment";

// export default function ProfDashboard() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     // upload the selected file
//     console.log("Uploading file:", selectedFile);
//     // You can send the file to the backend for processing here
//   };



//   return (
//     <>
//       <link
//         href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
//         rel="stylesheet"
//       />
//       <div className="bg-orange-100 min-h-screen">
//         <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
//           <div className="flex items-center justify-between py-2 text-5x1">
//             <div className="">
//               <img src={Medikonect} alt="medikonect" className="h-12" />
//             </div>
//             <div className="flex items-center text-gray-500">
//               <span
//                 className="material-icons-outlined p-2"
//                 style={{ fontSize: "30px" }}
//               >
//                 search
//               </span>
//               <span
//                 className="material-icons-outlined p-2"
//                 style={{ fontSize: "30px" }}
//               >
//                 notifications
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-row  pt-24 px-10 pb-4">
//           <div className="w-2/12 mr-6">
//           <div class="bg-white rounded-xl shadow-lg align-center mb-6 px-6 py-4 text-center">
//     <div class="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-20 w-20 p-5 text-white bg-gray-500 stroke-current">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//         </svg>
//     </div>
//     <p class="text-center font-bold">Laaraba Ashrawee</p>
// </div>


//             <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
//               <a
//                 href=""
//                 className="inline-block text-gray-600 hover:text-black my-4 w-full"
//               >
//                 <span className="material-icons-outlined float-left pr-2">
//                   face
//                 </span>
//                 Profile
//                 <span className="material-icons-outlined float-right">
//                   keyboard_arrow_right
//                 </span>
//               </a>
//               <a
//                 href="#"
//                 className="inline-block text-gray-600 hover:text-black my-4 w-full"
//                 onClick={() => showComponent("show-appointment")}
//               >
//                 <span className="material-icons-outlined float-left pr-2">
//                   book
//                 </span>
//                 Appointments
//                 <span className="material-icons-outlined float-right">
//                   keyboard_arrow_right
//                 </span>
//               </a>
//               <a
//                 href=""
//                 className="inline-block text-gray-600 hover:text-black my-4 w-full"
//               >
//                 <span className="material-icons-outlined float-left pr-2">
//                   settings
//                 </span>
//                 Settings
//                 <span className="material-icons-outlined float-right">
//                   keyboard_arrow_right
//                 </span>
//               </a>
//               <a
//                 href=""
//                 className="inline-block text-gray-600 hover:text-black my-4 w-full"
//               >
//                 <span className="material-icons-outlined float-left pr-2">
//                   power_settings_new
//                 </span>
//                 Log out
//                 <span className="material-icons-outlined float-right">
//                   keyboard_arrow_right
//                 </span>
//               </a>
//             </div>
//           </div>

//           <div className="w-10/12">
//             <div className="flex flex-row">
//               <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6">
//                 <p className="text-5xl text-indigo-900">
//                   Welcome <br />
//                   <strong>Lorem Ipsum</strong>
//                 </p>
//               </div>

//               <div
//                 className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6"
//                 style={{
//                   backgroundImage:
//                     "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
//                   backgroundPosition: "100% 40%",
//                 }}
//               >
//                 <p className="text-5xl text-indigo-900">
//                   Inbox <br />
//                   <strong>23</strong>
//                 </p>
//                 <a
//                   href=""
//                   className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
//                 >
//                   <strong>See messages</strong>
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-row h-64 mt-6">
//               <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
//                 a
//               </div>
//               <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
//                 b
//               </div>
//               <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
//                 c
//               </div>
//               {/* conditional rendering of component */}
//                 {component === "show-appointment" && <Appointment/>}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
