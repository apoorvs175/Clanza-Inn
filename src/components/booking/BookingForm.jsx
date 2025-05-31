import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendarAlt, FaUser, FaBed } from 'react-icons/fa'

function BookingForm() {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [guests, setGuests] = useState(1)
  const [roomType, setRoomType] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // In a real application, we would handle the booking here
    // For now, we'll just show a success message
    setFormSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setCheckInDate(null)
      setCheckOutDate(null)
      setGuests(1)
      setRoomType('')
    }, 5000)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative">
      {formSubmitted && (
        <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg flex items-center justify-center z-10 animate-fade-in">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Booking Request Sent!</h3>
            <p className="text-neutral-600 mb-0">
              Thank you for your booking request. We'll confirm your reservation shortly.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="checkIn">
              Check-in Date
            </label>
            <div className="relative">
              <DatePicker
                id="checkIn"
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                placeholderText="Select check-in date"
                className="input-field w-full pl-10"
                required
              />
              <div className="absolute left-3 top-3 text-neutral-500">
                <FaCalendarAlt />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="checkOut">
              Check-out Date
            </label>
            <div className="relative">
              <DatePicker
                id="checkOut"
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate || new Date()}
                placeholderText="Select check-out date"
                className="input-field w-full pl-10"
                required
                disabled={!checkInDate}
              />
              <div className="absolute left-3 top-3 text-neutral-500">
                <FaCalendarAlt />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="guests">
              Number of Guests
            </label>
            <div className="relative">
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="input-field w-full pl-10 appearance-none"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
              <div className="absolute left-3 top-3 text-neutral-500">
                <FaUser />
              </div>
              <div className="absolute right-4 top-3 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-neutral-700 font-medium mb-2" htmlFor="roomType">
              Room Type
            </label>
            <div className="relative">
              <select
                id="roomType"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="input-field w-full pl-10 appearance-none"
                required
              >
                <option value="" disabled>Select room type</option>
                <option value="dormitory">Mixed Dormitory</option>
                <option value="female_dorm">Female-Only Dormitory</option>
                <option value="private_twin">Private Twin Room</option>
                <option value="private_double">Private Double Room</option>
                <option value="deluxe">Deluxe Private Room</option>
              </select>
              <div className="absolute left-3 top-3 text-neutral-500">
                <FaBed />
              </div>
              <div className="absolute right-4 top-3 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="specialRequests">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            className="input-field w-full"
            rows="4"
            placeholder="Let us know if you have any special requests or requirements"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full py-4 text-lg"
        >
          Book Now
        </button>
        
        <p className="text-center text-neutral-500 text-sm mt-4">
          By clicking "Book Now", you agree to our terms and conditions.
        </p>
      </form>
    </div>
  )
}

export default BookingForm