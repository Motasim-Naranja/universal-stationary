import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">Suite # 213, 2nd Floor, Progressive Center, PECHS Block 6, Main Shahrah-e-Faisal, Karachi, Pakistan. PO-Box: 75400</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaPhoneAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+92-300-2066368</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <a href="mailto:info@universalstationary.com" className="text-gray-600 hover:underline">
              info@universalstationary.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message / Feedback</h3>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message / Feedback</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                rows="4"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your Message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
