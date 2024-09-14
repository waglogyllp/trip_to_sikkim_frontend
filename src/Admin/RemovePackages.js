// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const RemovePackages = () => {
//   const [packages, setPackages] = useState([]);

//   // Fetch packages from the server
//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const response = await axios.get('/api/packages'); // Replace with your API endpoint
//         setPackages(response.data);
//       } catch (error) {
//         console.error('Error fetching packages:', error);
//       }
//     };

//     fetchPackages();
//   }, []);

//   // Handle package deletion
//   const handleDelete = async (packageId) => {
//     try {
//       await axios.delete(`/api/packages/${packageId}`); // Replace with your API endpoint
//       setPackages(packages.filter(pkg => pkg._id !== packageId));
//     } catch (error) {
//       console.error('Error deleting package:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Remove Packages</h2>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance (km)</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Travel Time (hours)</th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {packages.map(pkg => (
//             <tr key={pkg._id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pkg.title}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pkg.distance}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pkg.travelTime}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                 <button
//                   onClick={() => handleDelete(pkg._id)}
//                   className="text-red-600 hover:text-red-900"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RemovePackages;
