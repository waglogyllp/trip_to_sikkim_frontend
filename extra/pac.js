import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import packimg from '../images/loc3.jpg';
import axios from 'axios';


const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getPackages = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/package/all`)

    setData(response.data)
  }


  useEffect(() => {
    getPackages()
  }, [])

  const getShortDescription = (desc) => {
    const short_desc = desc.toString().substring(0, 200) + " ..."
    return short_desc
  }

  console.log(data)

  return (
    <div className="packages text-white">
      {/* Search Section */}
      <section className="p-8 md:p-12">
      <div className="flex flex-col items-center">
  <div className="flex items-center mb-4">
    <input
      type="text"
      value={searchTerm}
      placeholder="Search packages"
      className="text-black p-2 rounded-l-full border-b-2 border-[#3b5d50] focus:outline-none focus:ring-0 focus:border-[#3b5d50] transition duration-300"
    />
    <button
      className="bg-[#3b5d50] text-black py-2 px-4 rounded-r-full font-semibold shadow-lg hover:bg-[#d88e1f] transition duration-300"
    >
      Search
    </button>
  </div>
  <p className="text-lg text-gray-300 mt-2">
    Find your perfect package here
  </p>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.data?.map((pkg) => (
            <div key={pkg.id} className="package-card bg-white text-black rounded-lg shadow-lg p-6">
              <img src={packimg} alt={pkg.title} className="h-40 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-700 mb-4">{getShortDescription(pkg.description)} <span style={{color: "green"}}>Read more</span></p>
                <Link
                  to={`/packages/${pkg._id}`} // Dynamic Link
                  className="btn btn-primary text-black py-2 px-4 rounded-full font-semibold transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
