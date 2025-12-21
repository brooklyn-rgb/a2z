'use client';

import { FaCar, FaCheckCircle, FaHandsHelping, FaShieldAlt, FaShippingFast, FaUsers } from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing, MdSupportAgent } from 'react-icons/md';

const AboutPage = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Quality Guarantee",
      description: "OEM-spec parts with rigorous quality testing"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Expert Support",
      description: "Specialists in German auto body parts"
    },
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: "Nationwide Service",
      description: "Delivery across South Africa"
    },
    {
      icon: <MdOutlinePrecisionManufacturing className="text-3xl" />,
      title: "Perfect Fit",
      description: "VIN matching for guaranteed compatibility"
    }
  ];

  const team = [
    {
      name: "Michael Schneider",
      role: "Parts Specialist",
      expertise: "BMW & Mercedes",
      experience: "15+ years"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Advisor",
      expertise: "Audi & Porsche",
      experience: "12+ years"
    },
    {
      name: "David Chen",
      role: "Logistics Manager",
      expertise: "Supply Chain",
      experience: "10+ years"
    },
    {
      name: "Lisa van der Merwe",
      role: "Customer Support",
      expertise: "VIN Matching",
      experience: "8+ years"
    }
  ];

  const brands = ['BMW', 'Audi', 'Mercedes-Benz', 'Porsche'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm font-medium">Since 2010</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Auto Body Parts Specialists
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Your trusted partner for BMW, Audi, Mercedes-Benz & Porsche body parts across South Africa
              </p>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span key={brand} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaCar className="text-8xl mx-auto text-white/80 mb-6" />
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">3,000+</div>
                  <div className="text-blue-200">Parts in Stock</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-xl mr-4">
              <FaCar className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2010, A2Z Autobody Parts began with a simple mission: to provide South African automotive enthusiasts and repair shops with access to premium-quality body parts for German vehicles.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started as a small specialized operation has grown into South Africa's leading supplier of BMW, Audi, Mercedes-Benz, and Porsche body parts. Our deep understanding of German engineering and commitment to quality has earned us the trust of thousands of customers nationwide.
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-6">
                We bridge the gap between OEM quality and aftermarket affordability, ensuring every part meets our stringent standards for fit, finish, and durability.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <FaCheckCircle className="text-blue-600 mr-3" />
                  <h4 className="font-bold text-lg text-gray-900">Our Commitment</h4>
                </div>
                <p className="text-gray-700">
                  Every part we supply is thoroughly inspected and backed by our fitment guarantee. We're not just selling parts; we're providing solutions that keep South Africa's premium vehicles on the road.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-blue-100 p-3 rounded-xl mr-4">
              <FaUsers className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Experts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-medium text-center mb-3">{member.role}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">Expertise:</span>
                      <span className="font-medium">{member.expertise}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600 mr-2">Experience:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <MdSupportAgent className="text-3xl mr-4" />
            <h2 className="text-3xl font-bold">Why Choose A2Z Autobody Parts?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Specialized Knowledge</h4>
                  <p className="text-blue-200">
                    We focus exclusively on German automotive brands, giving us unparalleled expertise in BMW, Audi, Mercedes-Benz, and Porsche parts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-blue-200">
                    Every part undergoes thorough inspection before shipping. We stand behind the quality and fitment of every component we supply.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Nationwide Reach</h4>
                  <p className="text-blue-200">
                    Serving all of South Africa with reliable door-to-door delivery. No matter where you are, we can get the parts to you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-4">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
                  <p className="text-blue-200">
                    From VIN matching assistance to after-sales support, we're committed to your satisfaction at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">13+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">10,000+</div>
            <div className="text-gray-600">Parts Supplied</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-2">Nationwide</div>
            <div className="text-gray-600">Delivery Coverage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;