import SectionTitle from '../components/common/SectionTitle'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

function Contact() {
  // Update page title
  document.title = 'Contact Us | Clanza In Hostel'
  
  return (
    <div>
      {/* Header */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7031408/pexels-photo-7031408.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
        }}
      >
        <div className="absolute inset-0 bg-neutral-900 bg-opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help!
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <SectionTitle 
            title="Get in Touch" 
            subtitle="Reach out to us with any questions or inquiries"
          />
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <ContactInfo />
            </div>
            
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What are your check-in and check-out times?</h3>
              <p className="text-neutral-700">
                Check-in is from 2:00 PM to 10:00 PM. If you're arriving outside these hours, please let us know in advance. Check-out is by 11:00 AM.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Do you have age restrictions?</h3>
              <p className="text-neutral-700">
                Yes, guests must be at least 18 years old to stay in dormitory rooms. For private rooms, guests under 18 must be accompanied by an adult.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Is there a curfew?</h3>
              <p className="text-neutral-700">
                No, there is no curfew. Guests can come and go as they please. The main entrance is accessible 24/7 with your key card.
              </p>
            </div>
            
            <div className="bg-neutral-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-neutral-700">
                We accept credit cards (Visa, MasterCard, American Express), PayPal, and cash for on-site payments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact