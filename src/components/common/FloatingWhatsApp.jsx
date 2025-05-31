import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const phoneNumber = "9810549852";
  const message = "Hello Clanza Inn";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition duration-300 ease-in-out md:hidden"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </div>
  );
};

export default FloatingWhatsApp;
