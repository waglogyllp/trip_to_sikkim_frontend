import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import packimg from '../images/loc3.jpg'; // Replace with actual dynamic images if necessary
import axios from 'axios';

// Example static packages data


const PackageDetails = () => {

  const [data, setPackage] = useState([])

  const { id } = useParams();  // Capture the dynamic route param 'id'

  const getPackage = async  () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/package?id=${id}`)
    setPackage(response?.data.data)
  }

  useEffect(() => {
      getPackage()
  }, [])


  return (

    
      
    

    <div className="package-details text-black p-8 max-w-4xl mx-auto">
    <div className="container mx-auto">
      {/* Package Title */}
      <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
      
      {/* Package Image */}
      <img
        src={packimg}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      
      {/* Package Description */}
      <p className="text-lg text-gray-700 mb-4">{data.description}</p>
      
      {/* Additional Package Details */}
      <div className="mb-4">
        <p className="text-lg font-semibold">Package Price:</p>
        <p>Small car: Rs. 3,500</p>
        <p>Luxury car: Rs. 5,000</p>
      </div>
      
      {/* Booking Button */}
      <a
        href="/booking"
        className="bg-green-600 text-white py-2 px-4 mt-6 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
      >
        Book Now
      </a>
    </div>
  </div>
  
  );
};

export default PackageDetails;
