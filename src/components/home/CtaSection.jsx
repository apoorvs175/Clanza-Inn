// import { FaWhatsapp, FaPhone } from 'react-icons/fa'

// function CtaSection() {
//   const handleWhatsApp = () => {
//     window.open('https://wa.me/1234567890', '_blank')
//   }

//   const handleCall = () => {
//     window.location.href = 'tel:+1234567890'
//   }

//   return (
//     <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
//       <div className="container-custom">
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Experience Clanza In?
//           </h2>
//           <p className="text-white text-opacity-90 text-lg mb-8">
//             Contact us directly for the best rates and instant response. We're here to help you plan your perfect stay!
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               onClick={handleWhatsApp}
//               className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
//             >
//               <FaWhatsapp className="mr-2 text-xl" />
//               Chat on WhatsApp
//             </button>
//             <button
//               onClick={handleCall}
//               className="btn bg-white text-primary hover:bg-neutral-100 flex items-center"
//             >
//               <FaPhone className="mr-2" />
//               Call Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CtaSection






























import { FaWhatsapp, FaPhone } from 'react-icons/fa'

function CtaSection() {
  const handleWhatsApp = () => {
    const message = "Hello, Clanza In, I want to know about you"; // Default message
    const phoneNumber = "9810549852"; // Your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  const handleCall = () => {
    window.location.href = 'tel:+9810549852'; // Your phone number
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Clanza In?
          </h2>
          <p className="text-white text-opacity-90 text-lg mb-8">
            Contact us directly for the best rates and instant response. We're here to help you plan your perfect stay!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Chat on WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="btn bg-white text-primary hover:bg-neutral-100 flex items-center"
            >
              <FaPhone className="mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
