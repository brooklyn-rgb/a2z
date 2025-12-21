'use client';

import { AiOutlineLogin, AiOutlineShop } from 'react-icons/ai';
import { BsClock, BsFillGearFill, BsShop } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';
import { GiCarDoor } from 'react-icons/gi';
import { IoMdCart, IoMdHome, IoMdPricetag } from 'react-icons/io';
import { MdDirectionsCar, MdEmail } from 'react-icons/md';
import { RiTruckLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center">
            <BsShop className="mr-2 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              A2Z AUTOBODY PARTS
            </span>
          </h3>
          <p className="text-gray-300">
            Specialists in premium body parts for BMW, Audi, Mercedes-Benz & Porsche.
            OEM-spec quality with nationwide delivery across South Africa.
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <FaPhoneAlt className="text-blue-400" />
              <a href="tel:+27100234831" className="hover:underline">010 023 4831</a>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <MdEmail className="text-blue-400" />
              <a href="mailto:sales@a2zautobodyparts.co.za" className="hover:underline">sales@a2zautobodyparts.co.za</a>
            </div>
          </div>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/A2Z-Autobody-Parts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors"
            >
              <FaFacebookF className="text-lg text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/a2z-autobody-parts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
            >
              <FaLinkedinIn className="text-lg text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <IoMdHome className="mr-2 text-blue-400" />
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              {
                icon: <IoMdHome className="mr-2 text-blue-400" />,
                text: 'Home',
                link: '/',
              },
              {
                icon: <AiOutlineShop className="mr-2 text-blue-400" />,
                text: 'Shop Parts',
                link: '/shop',
              },
              {
                icon: <IoMdPricetag className="mr-2 text-blue-400" />,
                text: 'Best Deals',
                link: '/best-deals',
              },
              {
                icon: <RiTruckLine className="mr-2 text-blue-400" />,
                text: 'Track Order',
                link: '/track-order',
              },
              {
                icon: <IoMdCart className="mr-2 text-blue-400" />,
                text: 'My Cart',
                link: '/cart',
              },
              {
                icon: <AiOutlineLogin className="mr-2 text-blue-400" />,
                text: 'Account',
                link: '/auth',
              },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Categories */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <MdDirectionsCar className="mr-2 text-blue-400" />
            Shop by Brand
          </h3>
          <ul className="space-y-3">
            {[
              {
                icon: <MdDirectionsCar className="mr-2 text-blue-400" />,
                text: 'BMW Parts',
                link: '/shop?brand=bmw',
              },
              {
                icon: <MdDirectionsCar className="mr-2 text-blue-400" />,
                text: 'Audi Parts',
                link: '/shop?brand=audi',
              },
              {
                icon: <MdDirectionsCar className="mr-2 text-blue-400" />,
                text: 'Mercedes Parts',
                link: '/shop?brand=mercedes',
              },
              {
                icon: <MdDirectionsCar className="mr-2 text-blue-400" />,
                text: 'Porsche Parts',
                link: '/shop?brand=porsche',
              },
              {
                icon: <GiCarDoor className="mr-2 text-blue-400" />,
                text: 'All German Parts',
                link: '/shop?category=german',
              },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Part Categories */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <BsFillGearFill className="mr-2 text-blue-400" />
            Part Categories
          </h3>
          <ul className="space-y-3">
            {[
              {
                icon: <GiCarDoor className="mr-2 text-blue-400" />,
                text: 'Body Panels',
                link: '/shop?category=body-panels',
              },
              {
                icon: <BsFillGearFill className="mr-2 text-blue-400" />,
                text: 'Bumpers & Grilles',
                link: '/shop?category=bumpers',
              },
              {
                icon: <MdDirectionsCar className="mr-2 text-blue-400" />,
                text: 'Lights & Lighting',
                link: '/shop?category=lights',
              },
              {
                icon: <GiCarDoor className="mr-2 text-blue-400" />,
                text: 'Mirrors & Glass',
                link: '/shop?category=mirrors',
              },
              {
                icon: <FiHeadphones className="mr-2 text-blue-400" />,
                text: 'Trim & Moldings',
                link: '/shop?category=trim',
              },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.link}
                  className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours & Info */}
        <div className="space-y-6 lg:col-span-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center">
                <BsClock className="mr-2 text-blue-400" />
                Business Hours
              </h3>
              <ul className="space-y-3 text-gray-300 mt-3">
                <li className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-blue-400 font-medium">8AM - 5PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-blue-400 font-medium">8AM - 1PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center">
                <RiTruckLine className="mr-2 text-blue-400" />
                Our Policies
              </h3>
              <ul className="space-y-2 mt-3">
                <li>
                  <a href="/shipping" className="text-gray-300 hover:text-blue-400 transition-colors">
                    • Nationwide Shipping
                  </a>
                </li>
                <li>
                  <a href="/returns" className="text-gray-300 hover:text-blue-400 transition-colors">
                    • Returns & Warranty
                  </a>
                </li>
                <li>
                  <a href="/vin-match" className="text-gray-300 hover:text-blue-400 transition-colors">
                    • VIN Matching Service
                  </a>
                </li>
                <li>
                  <a href="/fit-guarantee" className="text-gray-300 hover:text-blue-400 transition-colors">
                    • Fitment Guarantee
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold text-white flex items-center">
                <BsShop className="mr-2 text-blue-400" />
                Service Area
              </h3>
              <p className="text-gray-300 mt-3">
                Serving all of South Africa with door-to-door delivery.
                Professional parts sourcing for BMW, Audi, Mercedes & Porsche.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} A2Z Autobody Parts. Specialist in German automotive parts.
              {/* Removed developer credit as it's not relevant for a business footer */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;