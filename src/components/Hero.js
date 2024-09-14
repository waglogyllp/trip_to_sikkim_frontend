import React from 'react';
import '../styles/global.css';
import girlImage from '../images/girl.png'; // Update with the correct path to your image

const Hero = () => {
  return (

    <section className=" ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
          Discover the Magic of Sikkim 
          Your Ultimate Himalayan Adventure Awaits!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Embark on a breathtaking journey through the enchanting landscapes of Sikkim. From the majestic peaks of the Himalayas to the vibrant cultural tapestry and serene monasteries, our curated trips promise an unforgettable experience.          </p>
          <a 
            href="/booking" 
            className="inline-flex mb-3 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#3b5d50] hover:bg-[#2a4a3b] focus:ring-4 focus:ring-[#3b5d50] dark:focus:ring-[#2a4a3b]"
          >
            Book Now
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a 
            href="/packages" 
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-green-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700  dark:focus:ring-gray-800"
          >
            View Packages
          </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img 
            src={girlImage} 
            alt="Girl with Backpack" 
            className="max-w-[300px] max-height-[400px] object-contain clip-image"
          />
        </div>                
      </div>
    </section>

  );
}

export default Hero;
