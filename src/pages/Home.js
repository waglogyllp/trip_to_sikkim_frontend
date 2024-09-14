// src/components/Home.js
import React from 'react';
import '../styles/global.css';
import fourdham from '../images/fourdham.png';
import truck from '../images/truck.svg'
import support from '../images/support.svg'
import retu from '../images/return.svg'
import bag from '../images/bag.svg'
import { FaBoxOpen, FaPhoneAlt, FaCreditCard, FaSuitcase } from 'react-icons/fa';
import loc1 from '../images/loc1.jpg'
import loc2 from '../images/loc2.jpg'
import loc3 from '../images/loc3.jpg'
import loc4 from '../images/loc4.jpg'
import loc5 from '../images/loc5.jpg'
import loc6 from '../images/loc6.jpg'
import loc7 from '../images/loc7.jpg'
import loc8 from '../images/loc8.jpg'
import WhatsAppButton from '../components/whatsppbutton.js';
import Hero from '../components/Hero.js'
import Packeges from '../components/cards.js'
import girlPng from '../images/girl.png'
import locicon from '../images/locicon.svg'
import Hotel from './Hotel.js'
// Example image URLs, replace with your actual image paths or URLs



const locations = [
  {
    title: 'Location 1',
    description: 'Explore the serene landscapes of Sikkim in Location 1.',
    image: loc1,
    link: '/location-1',
  },
  {
    title: 'Location 2',
    description: 'Discover the hidden gems of Sikkim in Location 2.',
    image: loc2,
    link: '/location-2',
  },
  {
    title: 'Location 3',
    description: 'Experience the vibrant culture of Sikkim in Location 3.',
    image: loc3,
    link: '/location-3',
  },
  {
    title: 'Location 4',
    description: 'Enjoy the scenic beauty of Sikkim in Location 4.',
    image: loc4,
    link: '/location-4',
  },
  {
    title: 'Location 5',
    description: 'Uncover the breathtaking views of Sikkim in Location 5.',
    image: loc5,
    link: '/location-5',
  },
  {
    title: 'Location 6',
    description: 'Immerse yourself in the tranquility of Location 6 in Sikkim.',
    image: loc6,
    link: '/location-6',
  },
  {
    title: 'Location 7',
    description: 'Explore the lush greenery of Location 7 in Sikkim.',
    image: loc7,
    link: '/location-7',
  },
  {
    title: 'Location 8',
    description: 'Discover the majestic landscapes of Sikkim in Location 8.',
    image: loc8,
    link: '/location-8',
  },
];


const Home = () => {
  return (
    <div>
      <WhatsAppButton />
      <Hero/>
      <section className="p-4">
  <div className="flex flex-col md:flex-row h-auto md:h-96 text-black  rounded-lg overflow-hidden">
    <div className="w-full md:w-1/2 h-auto md:h-full flex items-center border justify-center p-0 mb-8 md:mb-0">
      <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect Ratio for 16:9 */}
        <video
          className="absolute top-0 left-0 w-full h-full"
          src={`${process.env.PUBLIC_URL}/my-video.mp4`} // Adjust the path if your video is in a different folder
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
    <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-4 md:p-20">
      <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
      <p className="mt-6 text-base md:text-lg">
        Welcome to Trip-To-Sikkim, your ultimate travel companion to explore the mesmerizing beauty of Sikkim. Our mission is to provide you with an unforgettable adventure through the pristine landscapes, vibrant culture, and serene ambiance of Sikkim. We offer tailored packages to suit your preferences, ensuring a seamless and enriching travel experience. Join us to discover hidden gems, indulge in local delicacies, and create memories that last a lifetime.
      </p>
    </div>
  </div>
</section>

<div className="container mx-auto p-4">
    <Packeges/>
    </div>

    <div className="container mx-auto p-4">
    <Hotel/>
    </div>

    <section className="mt-2 md:mt-24 p-6 rounded-lg dark:border-gray-700">
  <div className="flex flex-col md:flex-row h-auto text-black dark:text-white">
    <div className="w-full md:w-1/2 h-auto flex flex-col justify-center  p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Enquire</h1>
      <p className="text-base md:text-lg mb-8 text-gray-500 dark:text-gray-400">
        We’d love to hear from you! Please fill out the form below to get in touch with us, and we'll get back to you as soon as possible.
      </p>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="contact-number" className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-300">Contact Number</label>
          <input
            type="tel"
            id="contact-number"
            name="contact-number"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md   focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md   focus:outline-none focus:ring-2 "
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="bg-[#3b5d50] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#314d43] transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="w-full md:w-1/2 h-auto flex items-center justify-center border  p-4">
      <div className="relative w-full h-64 md:h-full flex items-center justify-center">
        <img
          src={fourdham}
          alt="Four Dham"
          className="w-full h-full object-cover rounded-lg border-2 border-gray-200 shadow-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
      </div>
    </div>
  </div>
</section>

      <div className="container mx-auto px-4 py-8">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    <div className="max-w-sm p-6  border rounded-lg   dark:border-gray-700">
      <FaBoxOpen className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Choose Your Package</h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Browse our packages and select the one that suits your preferences.
      </p>
      <a href="/packages" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our packages
        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
    
    <div className="max-w-sm p-6  border border-gray-200 rounded-lg  dark:border-gray-700">
      <FaPhoneAlt className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
      <a href="/contact">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Get in touch with our team to customize your itinerary and confirm availability.
      </p>
      <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        Contact us now
        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
    
    <div className="max-w-sm p-6  border border-gray-200 rounded-lg  ">
      <FaCreditCard className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
      <a href="/payment">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Make a Payment</h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Secure your booking with a convenient payment method.
      </p>
      <a href="https://sikkimtourism.org/travel-tips-for-sikkim/" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        Make a payment
        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
    
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <FaSuitcase className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Get Ready</h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Pack your bags and get ready for an unforgettable adventure!
      </p>
      <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        Get travel tips
        <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
    
  </div>
</div>

      





      <section className="p-4 md:p-8 ">
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <div key={index} className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={location.image}
              alt={location.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <p className="text-sm mb-2">{location.description}</p>
                <a
                  href={location.link}
                  className="bg-yellow-400 text-[#314d43] px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <br></br>
<br></br>
<div className="container px-4 md:px-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Left Box Section */}
    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
      <div className="w-[300px] h-[300px] border-4 border-dashed border-gray-300 rounded-lg shadow-xl flex justify-center items-center relative">
        {/* Animated Icon */}
        <div className="flex flex-col justify-center items-center">
          <div className="animate-bounce mb-2">
            <img
              src={locicon}
              alt="Animated Icon"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">Your Trip To Sikkim</h3>
        </div>
      </div>
    </div>

    {/* Right Content Section */}
    <div className="w-full md:w-1/2">
      <h2 className="section-title text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
      <p className="text-lg md:text-xl mb-8">
        At Trip-To-Sikkim, we are committed to providing an exceptional travel experience tailored to your needs. Our dedicated team ensures every aspect of your journey is smooth and enjoyable. Here’s why travelers choose us for their Sikkim adventures:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="feature">
          <div className="icon mb-4">
            <img src={truck} alt="Fast & Free Shipping" className="img-fluid" />
          </div>
          <h3 className="text-xl font-semibold">Fast & Free Shipping</h3>
          <p className="text-base">
            We ensure your travel documents and essentials are delivered swiftly and at no extra cost. Enjoy peace of mind knowing your paperwork will be handled promptly.
          </p>
        </div>

        <div className="feature">
          <div className="icon mb-4">
            <img src={bag} alt="Easy to Book" className="img-fluid" />
          </div>
          <h3 className="text-xl font-semibold">Easy to Book</h3>
          <p className="text-base">
            Our user-friendly booking system allows you to easily browse and select from a range of travel packages. Experience a hassle-free booking process with just a few clicks.
          </p>
        </div>

        <div className="feature">
          <div className="icon mb-4">
            <img src={support} alt="24/7 Customer Support" className="img-fluid" />
          </div>
          <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
          <p className="text-base">
            Our dedicated support team is available around the clock to assist you with any inquiries or issues. Whether you need help planning your itinerary or have questions during your trip, we’re here for you.
          </p>
        </div>

        <div className="feature">
          <div className="icon mb-4">
            <img src={retu} alt="Hassle-Free Returns" className="img-fluid" />
          </div>
          <h3 className="text-xl font-semibold">Hassle-Free Returns</h3>
          <p className="text-base">
            If you encounter any issues with our packages or services, our hassle-free return policy ensures that you can easily resolve any concerns. Your satisfaction is our priority.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





      











    </div>
  );
};

export default Home;
