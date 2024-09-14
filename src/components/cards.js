import React, { useState } from 'react';
import sikkim from '../images/sikkim.jpg';
import kalang from '../images/kalangpong.jpeg';
import darj from '../images/darjeeling.jpg';

const Card = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);

  const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
  const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);
  const toggleDropdown3 = () => setDropdown3Open(!dropdown3Open);

  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {/* Card 1 */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg p-4 min-h-[450px] flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              id="dropdownButton1"
              onClick={toggleDropdown1}
              className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {dropdown1Open && (
              <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-2 right-4 z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trip To Sikkim </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sikkim</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={sikkim}
              alt="Sikkim Tour"
            />
            <h5 className="mb-4 text-xl font-medium text-gray-900">Sikkim Tour Packages</h5>
            <p className="text-sm text-gray-500 text-center">
              Experience the best of Sikkim with our exclusive tour packages. Discover the lush green valleys, stunning waterfalls, and serene lakes.
            </p>
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <a
              href="/booking"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3b5d50] rounded-lg hover:bg-[#2e4a3d]"
            >
              Book Now
            </a>
            <a
              href="/packages"
              className="py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
            >
              Details
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg p-4 min-h-[450px] flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              id="dropdownButton2"
              onClick={toggleDropdown2}
              className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {dropdown2Open && (
              <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-2 right-4 z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trip To Sikkim</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Darjeeling </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={kalang}
              alt="Kalangpong"
            />
            <h5 className="mb-4 text-xl font-medium text-gray-900">Charming Darjeeling  Tour</h5>
            <p className="text-sm text-gray-500 text-center">
              Escape to Darjeeling  with our exclusive tour packages. Discover scenic beauty and rich heritage.
            </p>
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <a
              href="/booking"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3b5d50] rounded-lg hover:bg-[#2e4a3d]"
            >
              Book Now
            </a>
            <a
              href="/packages"
              className="py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
            >
              Details
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
        <div className="w-full max-w-sm border border-gray-200 rounded-lg p-4 min-h-[450px] flex flex-col justify-between">
          <div className="flex justify-end">
            <button
              id="dropdownButton3"
              onClick={toggleDropdown3}
              className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
              type="button"
            >
              <span className="sr-only">Open dropdown</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
            </button>
            {dropdown3Open && (
              <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-2 right-4 z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trip to Sikkim</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kalimpong</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={darj}
              alt="Kalimpong"
            />
            <h5 className="mb-4 text-xl font-medium text-gray-900">Kalimpong Getaway</h5>
            <p className="text-sm text-gray-500 text-center">
              Escape to Kalimpong, a serene town surrounded by snow-capped mountains.
            </p>
          </div>
          <div className="flex justify-center mt-4 md:mt-6">
            <a
              href="/booking"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3b5d50] rounded-lg hover:bg-[#2e4a3d]"
            >
              Book Now
            </a>
            <a
              href="/packages"
              className="py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
