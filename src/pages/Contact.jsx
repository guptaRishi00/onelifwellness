import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.purpose) newErrors.purpose = "Please select a purpose";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    
    try {
      // Prepare template parameters for EmailJS (matching Footer component structure)
      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        message: `Contact Form Submission:
        
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phoneNumber}
Purpose: ${formData.purpose}
Message: ${formData.message}

Time: ${new Date().toLocaleString()}`,
        time: new Date().toLocaleString(),
        user_email: formData.email
      };

      // Debug: Log what we're sending
      console.log('Sending Contact Form EmailJS data:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log('Contact Form EmailJS Result:', response);

      if (response.status === 200) {
        setSubmitted(true);
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          purpose: "",
          message: "",
        });
      }
    } catch (error) {
      console.error('Contact Form EmailJS Error Details:', error);
      setErrors({ form: `Failed to send the form: ${error.message || 'Unknown error'}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="olw-contact bottom-100 flex-col align-center">
      <div className="bottom-50"></div>
      <div className="contact-us-form-container">
        <div className="olw-form-container">
          <motion.div className="contact-form-heading" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Get in <span className="light-blue-color">Touch</span></h1>
            <p>Feel free to reach out to us with any inquiries, feedback, or support requests.</p>
          </motion.div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-us-form">
              <motion.input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
              {errors.name && <p className="error-message">{errors.name}</p>}
              
              <motion.input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} />
              {errors.email && <p className="error-message">{errors.email}</p>}
              
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <PhoneInput international defaultCountry="US" value={formData.phoneNumber} onChange={handlePhoneChange} />
              </motion.div>
              {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
              
              <motion.select name="purpose" value={formData.purpose} onChange={handleInputChange} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                <option value="" disabled>Purpose of Contact</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </motion.select>
              {errors.purpose && <p className="error-message">{errors.purpose}</p>}
              
              <motion.textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }} />
              {errors.message && <p className="error-message">{errors.message}</p>}
              
              <motion.button type="submit" className="submit-button" disabled={loading} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
                {loading ? "Sending..." : "SEND"}
              </motion.button>
              {errors.form && <p className="error-message">{errors.form}</p>}
            </form>
          ) : (
            <div className="thank-you-message">
              <h2>Thank you for contacting us!</h2>
              <p>We’ve received your information and will get back to you soon.</p>
            </div>
          )}
        </div>
        {/* Map with fade-in animation */}
        <motion.div 
          className="google-maps-container"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            className="google-maps-preview"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dubai+(One%20Life%20Wellness)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;