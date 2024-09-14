import React from 'react';
import iceland from '../images/iceland.jpeg'
import  victoria from '../images/victoria.jpeg'
import highlanders from '../images/highlanders.jpeg'
const HotelPage = () => (
  <div>
   

    <section id="hotels" className="p-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Hotels in Lachung</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hotel Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={iceland} alt="Iceland Residency Lachung" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Iceland Residency Lachung</h3>
              <p className="text-gray-700 mb-2">Rs. 2,500 per room per day - double sharing</p>
              <p className="text-gray-600">Dinner on Day 1, Lunch on Day 2. No breakfast as you need to start early from hotel. Breakfast needs to be purchased on the way near Thangu valley. No TV, but has Geyser, clean rooms, good food, etc.</p>
            </div>
          </div>
          
          {/* Hotel Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={victoria} alt="Sikkim Victoria" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sikkim Victoria</h3>
              <p className="text-gray-700 mb-2">Rs. 3,000 per room per day - double sharing</p>
              <p className="text-gray-600">Dinner on Day 1, Breakfast and Lunch on Day 2. Geyser, clean rooms, good food, etc. Deluxe rooms have TV which may or may not work as per signal.</p>
            </div>
          </div>
          
          {/* Hotel Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={highlanders}alt="Highlander’s Home" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Highlander’s Home</h3>
              <p className="text-gray-700 mb-2">Rs. 4,000 per room per day - double sharing</p>
              <p className="text-gray-600">Dinner on Day 1, Breakfast and Lunch on Day 2. Geyser, clean rooms, good food, etc. Deluxe rooms have TV which may or may not work as per signal.</p>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  </div>
);

export default HotelPage;
