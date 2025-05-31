// import { Link } from 'react-router-dom'
// import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
// import Logo from '../common/Logo'

// function Footer() {
//   const currentYear = new Date().getFullYear()
  
//   return (
//     <footer className="bg-neutral-900 text-white pt-16 pb-8">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* About */}
//           <div>
//             <div className="mb-6">
//               <Logo color="light" />
//             </div>
//             <p className="text-neutral-400 mb-6">
//               Clanza In offers a unique blend of comfort, convenience, and community in our modern hostel accommodations. Experience the perfect stay for travelers who want quality at affordable prices.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="https://facebook.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-neutral-400 hover:text-primary transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <FaFacebook size={20} />
//               </a>
//               <a 
//                 href="https://instagram.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-neutral-400 hover:text-primary transition-colors duration-200"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram size={20} />
//               </a>
//               <a 
//                 href="https://twitter.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-neutral-400 hover:text-primary transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <FaTwitter size={20} />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
//             <ul className="space-y-3">
//               <li>
//                 <Link to="/" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/rooms" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Rooms
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/booking" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Booking
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/gallery" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/location" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Location
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Policies */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Policies</h3>
//             <ul className="space-y-3">
//               <li>
//                 <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Cancellation Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Guest Rules
//                 </a>
//               </li>
//             </ul>
//           </div>
          
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
//                 <span className="text-neutral-400">
//                    Near Sharda Gate-5, KP-3<br />
//                   Greater Noida, UP 201310
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <FaPhone className="text-primary mr-3 flex-shrink-0" />
//                 <a href="tel:+91 98105 49852" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   +91 98105 49852
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
//                 <a href="mailto:Ceo@clanzainn.com" className="text-neutral-400 hover:text-primary transition-colors duration-200">
//                   Ceo@clanzainn.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
//           <p>&copy; {currentYear} Clanza In Hostel. All rights reserved.</p>
//         </div>
//         <div> Powered by Naman Singh</div>
//       </div>
//     </footer>
//   )
// }

// export default Footer





















import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Logo from '../common/Logo'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="mb-6">
              <Logo color="light" />
            </div>
            <p className="text-neutral-400 mb-6">
              Clanza In offers a unique blend of comfort, convenience, and community in our modern hostel accommodations. Experience the perfect stay for travelers who want quality at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Location
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Guest Rules
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                   Near Sharda Gate-5, KP-3<br />
                  Greater Noida, UP 201310
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:+91 98105 49852" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  +91 98105 49852
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                <a href="mailto:Ceo@clanzainn.com" className="text-neutral-400 hover:text-primary transition-colors duration-200">
                  Ceo@clanzainn.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500">
          <p>&copy; {currentYear} Clanza In Hostel. All rights reserved.</p>
        </div>
        
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '7px', color: '#aaa' }}>
          Powered by Naman Singh
        </div>
      </div>
    </footer>
  )
}

export default Footer
