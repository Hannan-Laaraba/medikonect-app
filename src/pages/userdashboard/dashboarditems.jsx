// import React from 'react';

// export const DashboardItems = ({ sidebarToggle, setUserPage }) => {

//   const getAppointment = () => {
//     console.log('Appointments Done!');
//   };

//   const getProfile = () => {
//     console.log('Profile Done!');
//   };

//   const getReview = () => {
//     console.log('Review Done!');
//   };

//   return (
//     <>
//       <div
//         className={`${
//           sidebarToggle ? "" : "ml-80 mr-7 sm:w-74"
//         } w-98 mx-10 bg-white rounded-lg`}
//       >
        
//       </div>

//       <div className={`${
//         sidebarToggle ? "" : "ml-80"
//       } w-98 mx-10 bg-violet-700 p-5 rounded-lg`}>
//         <p className='text-lg text-white font-semibold'>Sections</p>
//         <hr className="bg-white-500 h-1" />
        
        
//         <a
//           href="#"
//           onClick={() => getProfile()}
//           className="block py-2 text-white hover:text-gray-200"
//         >
//           Profile
//         </a>

        
//         <a
//           href="#"
//           onClick={() => getAppointment()}
//           className="block py-2 text-white hover:text-gray-200"
//         >
//           Appointments
//         </a>

        
//         <a
//           href="#"
//           onClick={() => getReview()}
//           className="block py-2 text-white hover:text-gray-200"
//         >
//           Review
//         </a>
//       </div>

//       {/* Other sections */}
      
//       <div className={`${
//         sidebarToggle ? "" : "ml-80"
//       } w-89 text-center mx-10 pb-10`}>
//         {/* Content */}
//       </div>

//       {/* MediKonect */}
//       <div className={`${
//         sidebarToggle ? "" : "ml-80"
//       } w-89 text-center mx-10`}>
//         <p className='text-gray-500'>MediKonect 2024®</p>
//       </div>
//     </>
//   );
// };
