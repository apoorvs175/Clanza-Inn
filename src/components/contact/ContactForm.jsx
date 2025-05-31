import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // In a real application, we would handle the form submission here
      // For now, we'll just show a success message
      setFormSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      }, 5000)
    }
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 relative">
      {formSubmitted && (
        <div className="absolute inset-0 bg-white bg-opacity-95 rounded-lg flex items-center justify-center z-10 animate-fade-in">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
            <p className="text-neutral-600 mb-0">
              Thank you for contacting us. We'll respond to your message as soon as possible.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="name">
            Your Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`input-field w-full pl-10 ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your name"
            />
            <div className="absolute left-3 top-3 text-neutral-500">
              <FaUser />
            </div>
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field w-full pl-10 ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            <div className="absolute left-3 top-3 text-neutral-500">
              <FaEnvelope />
            </div>
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="phone">
            Phone Number (Optional)
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field w-full pl-10"
              placeholder="Enter your phone number"
            />
            <div className="absolute left-3 top-3 text-neutral-500">
              <FaPhone />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="subject">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="input-field w-full"
          >
            <option value="">Select a subject</option>
            <option value="booking">Booking Inquiry</option>
            <option value="group">Group Booking</option>
            <option value="facilities">Facilities Question</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-neutral-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`input-field w-full ${errors.message ? 'border-red-500' : ''}`}
            rows="5"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full py-4 text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm