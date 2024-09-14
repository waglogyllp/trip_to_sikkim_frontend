import React, { useState } from 'react';

const AddPackages = () => {
  const [formData, setFormData] = useState({
    title: '',
    distance: '',
    travelTime: '',
    desc: '',
    note: '',
    sightSeeing: '',
    additionalCost: '',
    travelClassSmallCarPrice: '',
    travelClassSmallCarSeats: '',
    travelClassLuxuryCarPrice: '',
    travelClassLuxuryCarSeats: '',
    travelClassNormalCarPrice: '',
    travelClassNormalCarSeats: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // You would usually send formData to your server here
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Package</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Package Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter package title"
            required
          />
        </div>

        <div>
          <label htmlFor="distance" className="block text-sm font-medium text-gray-700">Distance (km)</label>
          <input
            type="number"
            id="distance"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter distance"
            required
          />
        </div>

        <div>
          <label htmlFor="travelTime" className="block text-sm font-medium text-gray-700">Travel Time (hours)</label>
          <input
            type="number"
            id="travelTime"
            name="travelTime"
            value={formData.travelTime}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter travel time"
            required
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter package description"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter any additional notes"
            rows="3"
            required
          />
        </div>

        <div>
          <label htmlFor="sightSeeing" className="block text-sm font-medium text-gray-700">Sightseeing Spots (comma separated)</label>
          <input
            type="text"
            id="sightSeeing"
            name="sightSeeing"
            value={formData.sightSeeing}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter sightseeing spots"
            required
          />
        </div>

        <div>
          <label htmlFor="additionalCost" className="block text-sm font-medium text-gray-700">Additional Costs (JSON format)</label>
          <textarea
            id="additionalCost"
            name="additionalCost"
            value={formData.additionalCost}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder='Enter additional costs as JSON, e.g., [{"price": 500, "description": "Permit for Changu Lake", "optional": false}]'
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">Small Car</h3>
            <label htmlFor="travelClassSmallCarPrice" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="travelClassSmallCarPrice"
              name="travelClassSmallCarPrice"
              value={formData.travelClassSmallCarPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
              required
            />

            <label htmlFor="travelClassSmallCarSeats" className="block text-sm font-medium text-gray-700 mt-4">Max Seats</label>
            <input
              type="number"
              id="travelClassSmallCarSeats"
              name="travelClassSmallCarSeats"
              value={formData.travelClassSmallCarSeats}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter max seats"
              required
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Luxury Car</h3>
            <label htmlFor="travelClassLuxuryCarPrice" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="travelClassLuxuryCarPrice"
              name="travelClassLuxuryCarPrice"
              value={formData.travelClassLuxuryCarPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
              required
            />

            <label htmlFor="travelClassLuxuryCarSeats" className="block text-sm font-medium text-gray-700 mt-4">Max Seats</label>
            <input
              type="number"
              id="travelClassLuxuryCarSeats"
              name="travelClassLuxuryCarSeats"
              value={formData.travelClassLuxuryCarSeats}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter max seats"
              required
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Normal Car</h3>
            <label htmlFor="travelClassNormalCarPrice" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="travelClassNormalCarPrice"
              name="travelClassNormalCarPrice"
              value={formData.travelClassNormalCarPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
              required
            />

            <label htmlFor="travelClassNormalCarSeats" className="block text-sm font-medium text-gray-700 mt-4">Max Seats</label>
            <input
              type="number"
              id="travelClassNormalCarSeats"
              name="travelClassNormalCarSeats"
              value={formData.travelClassNormalCarSeats}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter max seats"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackages;
