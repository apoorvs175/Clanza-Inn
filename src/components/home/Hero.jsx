



















import { FaWhatsapp, FaPhone } from 'react-icons/fa'

function Hero() {
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
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/clanza.jpg')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 mt-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Experience Modern <span className="text-primary">Hostel</span> Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-100 animate-slide-up">
            Affordable comfort in the heart of the city. Community, convenience, and cozy accommodations await you.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <button
              onClick={handleWhatsApp}
              className="btn bg-green-500 hover:bg-green-600 text-white flex items-center"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Chat on WhatsApp
            </button>
            <button
              onClick={handleCall}
              className="btn btn-primary flex items-center"
            >
              <FaPhone className="mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent h-32"></div>
    </section>
  )
}

export default Hero
