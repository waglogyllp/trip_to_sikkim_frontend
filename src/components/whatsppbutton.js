import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const WhatsAppButton = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number
    const text = `Name: ${name}\nMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    e.target.reset();
    setIsFormVisible(false);
  };

  return (
    <>
      <div
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer z-50"
        onClick={handleButtonClick}
      >
        <FaWhatsapp className="text-3xl" />
      </div>

      {isFormVisible && (
        <div className="fixed bottom-20 right-4 bg-white p-4 border rounded-lg shadow-lg z-50">
          <h3 className="text-xl font-bold mb-2">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-2 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border p-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
