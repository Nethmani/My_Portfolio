"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaCheck,
  FaClock,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageCTA from "../components/PageCTA";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxMessageLength = 5000;

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.length < 2) return "Name must be at least 2 characters";
    if (!/^[a-zA-Z\s]*$/.test(name))
      return "Name should only contain letters and spaces";
    return "";
  };

  const validateSubject = (subject) => {
    if (!subject.trim()) return "Subject is required";
    if (subject.length < 5) return "Subject must be at least 5 characters";
    if (subject.length > 100) return "Subject cannot exceed 100 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone) return ""; // Phone is optional
    if (!/^\+?\d{0,11}$/.test(phone)) {
      return "Please enter a valid phone number (only numbers and + allowed)";
    }
    if (phone.startsWith("+") && phone.length > 12) {
      return "Phone number cannot exceed 11 digits after +";
    }
    if (!phone.startsWith("+") && phone.length > 11) {
      return "Phone number cannot exceed 11 digits";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.length < 10) return "Message must be at least 10 characters";
    if (message.length > 5000) return "Message cannot exceed 5000 characters";
    return "";
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Validate the field that changed
    let error = "";
    switch (id) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "subject":
        error = validateSubject(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^\d+]/g, "");

    const finalValue = sanitizedValue.includes("+")
      ? "+" + sanitizedValue.replace(/\+/g, "")
      : sanitizedValue;

    const maxLength = finalValue.startsWith("+") ? 12 : 11;
    const truncatedValue = finalValue.slice(0, maxLength);

    setFormData((prev) => ({
      ...prev,
      phone: truncatedValue,
    }));

    const error = validatePhone(truncatedValue);
    setErrors((prev) => ({
      ...prev,
      phone: error,
    }));
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, "");

    setFormData((prev) => ({
      ...prev,
      name: sanitizedValue,
    }));

    const error = validateName(sanitizedValue);
    setErrors((prev) => ({
      ...prev,
      name: error,
    }));
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9@._%+-]/g, "");

    const atCount = (sanitizedValue.match(/@/g) || []).length;
    const finalValue =
      atCount > 1
        ? sanitizedValue.replace(/@/g, (match, index) =>
            index === sanitizedValue.indexOf("@") ? "@" : "",
          )
        : sanitizedValue;

    setFormData((prev) => ({
      ...prev,
      email: finalValue,
    }));

    const error = validateEmail(finalValue);
    setErrors((prev) => ({
      ...prev,
      email: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };

    if (!formData.phone) {
      newErrors.phone = "";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = "service_ibpjp62";
    const templateId = "template_d1wwe3h";
    const publicKey = "7I4P7U9hIAmsm_mZs";

    emailjs.init(publicKey);

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      category: formData.category,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setIsSubmitting(false);

        Swal.fire({
          title: "Message Sent Successfully! 🎉",
          html: `<div class="text-left">
            <p class="mb-3">Thank you for reaching out! I've received your message.</p>
            <p class="text-sm text-gray-600"><strong>What's next?</strong></p>
            <ul class="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
              <li>I'll review your message within 24 hours</li>
              <li>You'll receive a response at <strong>${formData.email}</strong></li>
              <li>For urgent matters, reach out via WhatsApp</li>
            </ul>
          </div>`,
          icon: "success",
          confirmButtonColor: "#06B6D4",
          background: "#1F2937",
          color: "#F9FAFB",
          allowOutsideClick: false,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          category: "general",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmitting(false);

        Swal.fire({
          title: "Message Failed to Send",
          text: "Something went wrong. Please try again or contact me directly via email.",
          icon: "error",
          confirmButtonColor: "#06B6D4",
          background: "#1F2937",
          color: "#F9FAFB",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-cyan-900 text-white">
      <NavBar />

      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Highlighted Tag */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <FaPaperPlane className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Let's Start a Conversation
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects and discuss
            new opportunities. Whether you have a question or just want to say
            hello, feel free to reach out!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Profile & Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ translateY: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500 p-1 mb-6 shadow-xl hover:shadow-cyan-500/25 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-700">
                      <Image
                        src="/images/profile1.jpg"
                        width={128}
                        height={128}
                        alt="Pamalka Nethmani"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/128?text=PN";
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Pamalka Nethmani
                  </h3>
                  <p className="text-gray-400 mb-1">Full Stack Developer</p>
                  <p className="text-cyan-400 text-sm font-medium mb-6">
                    React • Node.js • Python • Cloud
                  </p>

                  <div className="flex justify-center space-x-4">
                    {[
                      {
                        icon: FaEnvelope,
                        href: "mailto:nethmanipamalka@gmail.com",
                        color: "hover:text-red-400",
                      },
                      {
                        icon: FaGithub,
                        href: "https://github.com/Nethmani",
                        color: "hover:text-white",
                      },
                      {
                        icon: FaLinkedin,
                        href: "https://www.linkedin.com/in/pamalka-nethmani-a503b62a9/",
                        color: "hover:text-blue-400",
                      },
                      {
                        icon: FaWhatsapp,
                        href: "https://wa.me/94770587781",
                        color: "hover:text-green-400",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-125`}
                        aria-label={social.icon.name}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
                  <FaRocket className="mr-3" />
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/94770587781?text=Hi%20Pamalka%20I%20would%20like%20to%20discuss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-green-900/30 hover:bg-green-900/50 rounded-lg border border-green-700/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaWhatsapp className="text-green-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-300">
                          WhatsApp
                        </p>
                        <p className="text-xs text-gray-500">
                          Instant response
                        </p>
                      </div>
                    </div>
                    <span className="text-green-400 text-xs font-semibold">
                      Chat Now
                    </span>
                  </a>
                  <a
                    href="mailto:nethmanipamalka@gmail.com"
                    className="flex items-center justify-between p-3 bg-cyan-900/30 hover:bg-cyan-900/50 rounded-lg border border-cyan-700/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <FaEnvelope className="text-cyan-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-300">
                          Email
                        </p>
                        <p className="text-xs text-gray-500">
                          Usually &lt;2 hours
                        </p>
                      </div>
                    </div>
                    <span className="text-cyan-400 text-xs font-semibold">
                      Send
                    </span>
                  </a>
                </div>
              </div>

              {/* Contact Information */}
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ translateY: -5 }}
              >
                <h4 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center">
                  <FaMapMarkerAlt className="mr-3" />
                  Contact Information
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <FaEnvelope className="text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Email</p>
                      <a
                        href="mailto:nethmanipamalka@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm break-all"
                      >
                        nethmanipamalka@gmail.com
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        Response time: &lt;2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <FaPhone className="text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Phone</p>
                      <a
                        href="tel:+94770587781"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        +94 77 058 7781
                      </a>
                      <p className="text-xs text-gray-500 mt-1">
                        Available: 9 AM - 6 PM (UTC+5:30)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-300">Location</p>
                      <span className="text-gray-400 text-sm">
                        Wasala Watta, Kottawa
                        <br />
                        Pannipitiya, Sri Lanka
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Response Time & Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 p-6 rounded-2xl shadow-xl border border-green-700/50 hover:border-green-600 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">
                      Available for Projects
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Actively accepting new opportunities and collaborations.
                    Average response time: 2-4 hours.
                  </p>
                  <div className="pt-3 border-t border-green-700/50">
                    <p className="text-xs text-gray-400 flex items-center">
                      <FaClock className="mr-2 text-yellow-400" />
                      <span>
                        Response SLA: Within 24 hours | For urgent: use WhatsApp
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full -translate-y-20 -translate-x-20"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <FaPaperPlane className="text-cyan-400 text-2xl mr-4" />
                    <div>
                      <h4 className="text-2xl font-semibold text-cyan-400">
                        Send Me a Message
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Fill out the form below and I'll get back to you shortly
                      </p>
                    </div>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-gray-300"
                        >
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="text"
                            id="name"
                            name="user_name"
                            value={formData.name}
                            onChange={handleNameChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ${
                              errors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-600 focus:border-cyan-400"
                            }`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠</span>
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-gray-300"
                        >
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="email"
                            id="email"
                            name="user_email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ${
                              errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-600 focus:border-cyan-400"
                            }`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠</span>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-gray-300"
                        >
                          Phone Number{" "}
                          <span className="text-gray-500 text-xs">
                            (Optional)
                          </span>
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className={`w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-600 focus:border-cyan-400"
                            }`}
                            placeholder="+94123456789"
                            maxLength={12}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-2 flex items-center">
                            <span className="mr-1">⚠</span>
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="group">
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium mb-2 text-gray-300"
                        >
                          Inquiry Type <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FaCode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-400 transition-colors pointer-events-none" />
                          <select
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 focus:border-cyan-400 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-gray-300"
                          >
                            <option value="general">General Inquiry</option>
                            <option value="project">
                              Project Collaboration
                            </option>
                            <option value="freelance">Freelance Work</option>
                            <option value="hiring">Hiring Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-600 focus:border-cyan-400"
                        }`}
                        placeholder="What's this about? (e.g., React Project Discussion)"
                        maxLength={100}
                      />
                      <div className="flex justify-between items-start mt-2">
                        <div>
                          {errors.subject && (
                            <p className="text-red-400 text-sm flex items-center">
                              <span className="mr-1">⚠</span>
                              {errors.subject}
                            </p>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {formData.subject.length}/100
                        </span>
                      </div>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Your Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        maxLength={5000}
                        className={`w-full p-4 bg-gray-700/50 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all duration-300 resize-none ${
                          errors.message
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-600 focus:border-cyan-400"
                        }`}
                        placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                      ></textarea>
                      <div className="flex justify-between items-start mt-2">
                        <div>
                          {errors.message && (
                            <p className="text-red-400 text-sm flex items-center">
                              <span className="mr-1">⚠</span>
                              {errors.message}
                            </p>
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            formData.message.length > 4500
                              ? "text-yellow-400"
                              : "text-gray-500"
                          }`}
                        >
                          {formData.message.length}/{maxMessageLength}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-3 ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed hover:scale-100"
                          : ""
                      }`}
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-gray-400 text-xs text-center mt-4 leading-relaxed">
                      💡 Pro Tip: Include as much detail as possible about your
                      project or inquiry for a faster, more helpful response.
                      For urgent matters, reach out via WhatsApp!
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Page CTA - Connect to next page */}
      <PageCTA currentPage="contact" />

      <Footer />
    </div>
  );
}
