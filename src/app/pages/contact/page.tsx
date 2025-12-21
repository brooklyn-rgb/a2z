'use client';

import { useState } from 'react';
import { FaClock, FaHeadset, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleBrand: '',
    partNumber: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const vehicleBrands = ['BMW', 'Audi', 'Mercedes-Benz', 'Porsche', 'Other'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Our Parts Specialists</h1>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Get expert assistance for BMW, Audi, Mercedes-Benz & Porsche body parts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <FaHeadset className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Need help finding the right part? Our specialists can assist with VIN matching and part identification.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010 023 4831"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Brand *
                  </label>
                  <select
                    name="vehicleBrand"
                    required
                    value={formData.vehicleBrand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Brand</option>
                    {vehicleBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Part Number (If Known)
                </label>
                <input
                  type="text"
                  name="partNumber"
                  value={formData.partNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 51112233344"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe the part you need, include VIN if available..."
                ></textarea>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="newsletter" className="rounded" />
                <label htmlFor="newsletter" className="text-sm text-gray-600">
                  Receive updates on new parts and special offers
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MdPhone className="text-2xl mr-4 text-blue-300" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone Support</h4>
                    <a href="tel:+27100234831" className="text-blue-200 hover:text-white text-xl font-bold block mt-1">
                      010 023 4831
                    </a>
                    <p className="text-blue-300 text-sm mt-1">Mon-Fri: 8AM-5PM | Sat: 8AM-1PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdEmail className="text-2xl mr-4 text-blue-300" />
                  <div>
                    <h4 className="font-semibold text-lg">Email Support</h4>
                    <a href="mailto:sales@a2zautobodyparts.co.za" className="text-blue-200 hover:text-white text-lg block mt-1">
                      sales@a2zautobodyparts.co.za
                    </a>
                    <p className="text-blue-300 text-sm mt-1">Response within 2 business hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MdLocationOn className="text-2xl mr-4 text-blue-300" />
                  <div>
                    <h4 className="font-semibold text-lg">Service Area</h4>
                    <p className="text-blue-200 text-lg mt-1">Nationwide South Africa</p>
                    <p className="text-blue-300 text-sm mt-1">Door-to-door delivery across SA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FaShieldAlt className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">VIN Matching</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Guaranteed fitment with our VIN verification service
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <FaTruck className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900">Nationwide Delivery</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Door-to-door shipping across South Africa
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FaClock className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-blue-900">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-blue-900">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Emergency Support:</span> For urgent parts inquiries outside business hours, email us and we'll respond first thing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">How do I find the right part for my vehicle?</h4>
              <p className="text-gray-600">
                Provide us with your vehicle's VIN number or registration details. Our specialists will match the exact part needed for your BMW, Audi, Mercedes-Benz, or Porsche.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">What is your shipping policy?</h4>
              <p className="text-gray-600">
                We offer nationwide delivery across South Africa. Standard delivery takes 3-5 business days, with expedited options available. Free shipping on orders over R1999.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Do you offer fitment guarantees?</h4>
              <p className="text-gray-600">
                Yes! All parts come with a fitment guarantee when purchased with VIN verification. If a part doesn't fit, we'll replace it or provide a full refund.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Can I return parts?</h4>
              <p className="text-gray-600">
                Unused parts in original packaging can be returned within 30 days. Special order and custom parts may have different return policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;