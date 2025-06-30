"use client"

import { useState, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]*$/.test(name)) return 'Name should only contain letters and spaces';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone) return ''; // Phone is optional
    if (!/^\+?\d{0,11}$/.test(phone)) {
      return 'Please enter a valid phone number (only numbers and + allowed)';
    }
    if (phone.startsWith('+') && phone.length > 12) {
      return 'Phone number cannot exceed 11 digits after +';
    }
    if (!phone.startsWith('+') && phone.length > 11) {
      return 'Phone number cannot exceed 11 digits';
    }
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.length < 10) return 'Message must be at least 10 characters';
    return '';
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Validate the field that changed
    let error = '';
    switch (id) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'message':
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors(prev => ({
      ...prev,
      [id]: error
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Only allow numbers and + at the start
    const sanitizedValue = value.replace(/[^\d+]/g, '');
    
    // Ensure + is only at the start
    const finalValue = sanitizedValue.includes('+') 
      ? '+' + sanitizedValue.replace(/\+/g, '')
      : sanitizedValue;

    // Limit to 11 digits after + (if present)
    const maxLength = finalValue.startsWith('+') ? 12 : 11;
    const truncatedValue = finalValue.slice(0, maxLength);

    setFormData(prev => ({
      ...prev,
      phone: truncatedValue
    }));

    // Validate the new value
    const error = validatePhone(truncatedValue);
    setErrors(prev => ({
      ...prev,
      phone: error
    }));
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    // Only allow letters and spaces
    const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    
    setFormData(prev => ({
      ...prev,
      name: sanitizedValue
    }));

    // Validate the new value
    const error = validateName(sanitizedValue);
    setErrors(prev => ({
      ...prev,
      name: error
    }));
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    // Allow letters, numbers, and specific email characters
    const sanitizedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, '');
    
    // Ensure only one @ symbol
    const atCount = (sanitizedValue.match(/@/g) || []).length;
    const finalValue = atCount > 1 
      ? sanitizedValue.replace(/@/g, (match, index) => index === sanitizedValue.indexOf('@') ? '@' : '')
      : sanitizedValue;
    
    setFormData(prev => ({
      ...prev,
      email: finalValue
    }));

    // Validate the new value
    const error = validateEmail(finalValue);
    setErrors(prev => ({
      ...prev,
      email: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message)
    };

    // If phone is empty, don't show error (since it's optional)
    if (!formData.phone) {
      newErrors.phone = '';
    }

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_qkck3gy';
    const templateId = 'template_ctfpvoh';
    const publicKey = '_0yfdCDprJFHc4MeO';
    
    emailjs.init(publicKey);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs.send(serviceId, templateId, templateParams)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);

        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out! I will get back to you soon.',
          icon: 'success',
          confirmButtonColor: '#3B82F6'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);

        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#3B82F6'
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white pt-16 flex flex-col">
      <NavBar />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* <h3 className="text-4xl font-bold mb-10 text-center">Get in Touch</h3> */}
          
          {/* Two-column layout container */}
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Column - Contact Details */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg lg:w-1/2">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center shadow-xl border-4 border-blue-400 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 mb-8">
                  <Image 
                    src="/images/profile.jpg"
                    width={224}
                    height={224}
                    alt="Oshadha Pathiraja"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/224?text=Profile";
                    }}
                  />
                </div>
                
                {/* Contact Details */}
                <div className="text-left w-full">
                  <h4 className="text-2xl font-semibold mb-6 text-blue-400">Contact Details</h4>
                  
                  {/* <div className="flex items-center mb-4">
                    <FaEnvelope className="mr-3 text-blue-400 text-xl" />
                    <div>
                      <span className="block font-medium">Email:</span>
                      <a href="mailto:oshadhanipun093@gmail.com" className="hover:text-blue-300 transition">
                        oshadhanipun093@gmail.com
                      </a>
                    </div>
                  </div> */}
                
                  
                  <div className="flex items-center mb-6">
                    <span className="inline-block w-5 mr-3">📍</span>
                    <div>
                      <span className="block font-medium">Location:</span>
                      <span>Nagama, Welpalla, North Western, Sri Lanka</span>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <h4 className="text-xl font-semibold mb-4 text-blue-400 mt-8">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:viduminipavithra@gmail.com" 
                      className="text-3xl text-gray-300 hover:text-blue-300 transition"
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </a>
                    <a 
                      href="https://github.com/Vidumini16" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-3xl text-gray-300 hover:text-white transition"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/vidumini-chandrasekara-64639a30a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-3xl text-gray-300 hover:text-blue-400 transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/1TQ3EuZrRY/?mibextid=LQQJ4d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-3xl text-gray-300 hover:text-blue-600 transition"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>
                   
                    
                    <a 
                      href="https://wa.me/94762404667" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-3xl text-gray-300 hover:text-green-400 transition"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg lg:w-1/2">
              <h4 className="text-2xl font-semibold mb-6 text-blue-400">Send Me a Message</h4>
              <form ref={form} onSubmit={handleSubmit} className="text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="user_name"
                      value={formData.name}
                      onChange={handleNameChange}
                      className={`w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                        errors.name ? 'border-2 border-red-500' : ''
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="user_email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={`w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                        errors.email ? 'border-2 border-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.phone ? 'border-2 border-red-500' : ''
                    }`}
                    placeholder="+94123456789 (optional)"
                    maxLength={12}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    className={`w-full p-3 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.message ? 'border-2 border-red-500' : ''
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className={`bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-md transition shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
