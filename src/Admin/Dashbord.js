import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add Packages */}
        <Link to="/admin/add-packages" className="bg-blue-500 text-white rounded-lg shadow-lg p-6 flex items-center justify-center hover:bg-blue-600 transition-colors">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Add Packages</h2>
            <p>Add new travel packages to the system.</p>
          </div>
        </Link>

        {/* Remove Packages */}
        <Link to="/admin/remove-packages" className="bg-red-500 text-white rounded-lg shadow-lg p-6 flex items-center justify-center hover:bg-red-600 transition-colors">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Remove Packages</h2>
            <p>Manage and remove existing packages.</p>
          </div>
        </Link>

        {/* See Booking */}
        <Link to="/admin/view-bookings" className="bg-green-500 text-white rounded-lg shadow-lg p-6 flex items-center justify-center hover:bg-green-600 transition-colors">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">See Bookings</h2>
            <p>View and manage booking details.</p>
          </div>
        </Link>

        {/* Additional Option */}
        <Link to="/admin/settings" className="bg-gray-500 text-white rounded-lg shadow-lg p-6 flex items-center justify-center hover:bg-gray-600 transition-colors">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Settings</h2>
            <p>Adjust admin settings and preferences.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
