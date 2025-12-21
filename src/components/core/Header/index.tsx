'use client';

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaCar, FaTruckPickup } from 'react-icons/fa';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation items specific to auto body parts
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop Parts', href: '/shop' },
    { name: 'Brands', href: '/brands', submenu: [
      { name: 'BMW Parts', href: '/brand/bmw' },
      { name: 'Audi Parts', href: '/brand/audi' },
      { name: 'Mercedes Parts', href: '/brand/mercedes' },
      { name: 'Porsche Parts', href: '/brand/porsche' },
    ]},
    { name: 'Categories', href: '/shop', submenu: [
      { name: 'Body Panels', href: '/category/body-panels' },
      { name: 'Bumpers', href: '/category/bumpers' },
      { name: 'Lights & Lighting', href: '/category/lights' },
      { name: 'Mirrors', href: '/category/mirrors' },
      { name: 'Trim & Moldings', href: '/category/trim' },
      { name: 'Accessories', href: '/category/accessories' },
    ]},
    { name: 'About', href: '/pages/about' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="mb-2 md:mb-0">🚚 <strong>Nationwide Delivery</strong> across South Africa</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <BsTelephone className="mr-2" />
              <a href="tel:+27100234831" className="hover:underline">010 023 4831</a>
            </span>
            <span className="hidden md:inline">•</span>
            <span>VIN Matching Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AiOutlineMenu />
              </button>
              
              <a href="/" className="flex items-center space-x-3">
                <div className="bg-blue-900 text-white p-2 rounded">
                  <FaCar className="text-2xl" />
                </div>
                <div className="hidden md:block">
                  <h1 className="text-2xl font-bold text-gray-900">A2Z AUTOBODY PARTS</h1>
                  <p className="text-xs text-gray-600">German Auto Parts Specialists</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.slice(0, 3).map((item) => (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.href} 
                    className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
                  >
                    {item.name}
                    {item.submenu && <span className="ml-1">▼</span>}
                  </a>
                  {item.submenu && (
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                      {item.submenu.map((subItem) => (
                        <a 
                          key={subItem.name} 
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search by part number, VIN, or description..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-2 text-gray-500 hover:text-blue-600"
                >
                  <AiOutlineSearch className="text-xl" />
                </button>
              </form>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
                <AiOutlineUser className="text-2xl" />
                <span className="ml-2 hidden lg:inline">Account</span>
              </button>
              
              <a href="/cart" className="relative flex items-center text-gray-700 hover:text-blue-600">
                <AiOutlineShoppingCart className="text-2xl" />
                <span className="ml-2 hidden lg:inline">Cart</span>
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </a>
              
              <a 
                href="tel:+27100234831"
                className="hidden md:flex items-center bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                <BsTelephone className="mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Second Row - Categories & More Navigation */}
          <div className="hidden md:flex items-center justify-between mt-4">
            <div className="flex items-center space-x-6">
              {navItems.slice(3).map((item) => (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-blue-600 flex items-center"
                  >
                    {item.name}
                    {item.submenu && <span className="ml-1">▼</span>}
                  </a>
                  {item.submenu && (
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-50">
                      {item.submenu.map((subItem) => (
                        <a 
                          key={subItem.name} 
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
            
         <span className="flex items-center text-green-600">
  <FaTruckPickup className="mr-2" />
  Free Shipping &gt; R1999
</span>
</div>
</div>
</div>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search parts..."
                    className="w-full px-4 py-2 border rounded-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute right-3 top-2">
                    <AiOutlineSearch className="text-xl text-gray-500" />
                  </button>
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a 
                      href={item.href}
                      className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded"
                      onClick={() => !item.submenu && setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <a 
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 px-4 text-gray-600 hover:bg-blue-50 rounded text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            • {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact */}
              <div className="mt-6 pt-4 border-t">
                <a 
                  href="tel:+27100234831"
                  className="flex items-center justify-center bg-blue-900 text-white py-3 rounded hover:bg-blue-800 mb-3"
                >
                  <BsTelephone className="mr-2" />
                  Call: 010 023 4831
                </a>
                <div className="flex justify-center space-x-4">
                  <button className="flex items-center text-gray-700">
                    <AiOutlineUser className="mr-2" />
                    Account
                  </button>
                  <a href="/cart" className="flex items-center text-gray-700">
                    <AiOutlineShoppingCart className="mr-2" />
                    Cart (0)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderSection;