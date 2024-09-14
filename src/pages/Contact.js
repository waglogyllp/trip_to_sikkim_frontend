import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row h-96  text-black p-4 md:p-0">
        <div className="mt-12 md:mt-24 md:ml-20 text-left w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold">Get in Touch with Us</h1>
          <p className="mb-6 text-base md:text-lg">
            Have questions or need assistance? We're here to help you with any inquiries you might have. Reach out to us and let's make your experience unforgettable!
          </p>

          
        </div>
       
      </section>

      <section className="p-8 bg-gray-100">
        <div className="container mx-auto">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-4 text-black shadow-lg rounded-lg">
              <div className="text-black-500 mb-2">
                <FaMapMarkerAlt className="w-6 h-6 inline-block" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p>Gangtok , Sikkim</p>
            </div>
            <div className="text-center p-4 text-black shadow-lg rounded-lg">
              <div className="text-black-500 mb-2">
                <FaPhoneAlt className="w-6 h-6 inline-block" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Call Us</h2>
              <p>+91 68468468468</p>
            </div>
            <div className="text-center p-4 text-black shadow-lg rounded-lg">
              <div className="text-black-500 mb-2">
                <FaEnvelope className="w-6 h-6 inline-block" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Email Us</h2>
              <p>triptosikkim@gmail.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.036299730698!2d92.79864457544822!3d26.636611274507736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744fd2bb80c1a75%3A0x2d4c9d8744b8b7b4!2sNepalipatty%20lane%20number%202!5e0!3m2!1sen!2sin!4v1625484105810!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg h-full"
              ></iframe>
            </div>
            <div className=" p-8 shadow-lg rounded-lg text-white">
              <form className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
                />
                <textarea
                  placeholder="Message"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
                  rows="5"
                ></textarea>
                <button
                  type="submit"
                  className=" bg-[#314d43] text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
