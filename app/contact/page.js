"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing icons

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY') // Use your actual public key here
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-6">Feel free to reach out using the form below:</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <p className={`mt-4 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
          {status}
        </p>
      )}

      {/* Social Media Links with Icons */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Connect with me:</h3>
        <div class Name="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/YOUR_GITHUB" className="text-blue-500 hover:underline" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" className="text-blue-500 hover:underline" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/YOUR_TWITTER" className="text-blue-500 hover:underline" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
