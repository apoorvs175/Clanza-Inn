import { FaCheck } from 'react-icons/fa'

function BookingInfo() {
  const bookingInfo = [
    "Flexible cancellation policy (free cancellation up to 48 hours before check-in)",
    "Pay only 20% deposit to secure your booking",
    "Best rate guarantee when booking directly",
    "No hidden fees or charges",
    "Special discounts for extended stays"
  ]
  
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Booking Information</h3>
      
      <ul className="space-y-4 mb-8">
        {bookingInfo.map((info, index) => (
          <li key={index} className="flex items-start">
            <div className="bg-secondary rounded-full p-1 mr-3 mt-1 flex-shrink-0">
              <FaCheck className="text-white text-xs" />
            </div>
            <span className="text-neutral-700">{info}</span>
          </li>
        ))}
      </ul>
      
      <div className="bg-neutral-100 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Check-in & Check-out</h4>
        <div className="space-y-3 text-neutral-700">
          <p className="flex justify-between">
            <span>Check-in Time:</span>
            <span className="font-medium">2:00 PM - 10:00 PM</span>
          </p>
          <p className="flex justify-between">
            <span>Check-out Time:</span>
            <span className="font-medium">By 11:00 AM</span>
          </p>
          <p className="flex justify-between">
            <span>Late Check-in:</span>
            <span className="font-medium">Available with notice</span>
          </p>
        </div>
        
        <div className="border-t border-neutral-300 my-4"></div>
        
        <h4 className="text-lg font-semibold mb-4">Payment Options</h4>
        <div className="space-y-2 text-neutral-700">
          <p>We accept the following payment methods:</p>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-neutral-200 text-neutral-800">Credit Card</span>
            <span className="badge bg-neutral-200 text-neutral-800">PayPal</span>
            <span className="badge bg-neutral-200 text-neutral-800">Cash (on arrival)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingInfo