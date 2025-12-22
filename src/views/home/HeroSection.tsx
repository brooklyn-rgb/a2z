'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  FaCar,
  FaHeadset,
  FaRegCreditCard,
  FaShieldAlt,
  FaShippingFast,
} from 'react-icons/fa';
import { GiCarDoor } from 'react-icons/gi';
import {
  MdDirectionsCar,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto body parts slides
  const slides = [
    {
      id: 1,
      title: 'Premium Auto Body Parts',
      subtitle: 'German Engineering Specialists',
      description:
        'OEM-spec body parts for BMW, Audi, Mercedes-Benz & Porsche with guaranteed fitment',
      cta: 'Browse Parts',
      ctaLink: '/shop?category=body-parts',
      imageBg: 'bg-gradient-to-br from-blue-900 to-gray-900',
      discount: 'VIN MATCH',
      productImage: '/images/bmw-m4-parts.jpg', // You'll need to add this image
      highlight: 'Quality Guaranteed',
      price: 'Free Shipping > R1999',
    },
    {
      id: 2,
      title: 'BMW Body Parts',
      subtitle: 'M Series & All Models',
      description:
        'Complete range of body panels, bumpers, lights and trim for all BMW models',
      cta: 'Shop BMW',
      ctaLink: '/shop?brand=bmw',
      imageBg: 'bg-gradient-to-br from-blue-800 to-gray-800',
      discount: '15% OFF',
      productImage: '/images/bmw-parts.jpg', // You'll need to add this image
      highlight: 'Best Sellers',
      price: 'Same Day Dispatch',
    },
    {
      id: 3,
      title: 'Audi & Porsche Parts',
      subtitle: 'Premium Body Components',
      description:
        'High-quality replacement parts for Audi and Porsche vehicles',
      cta: 'View Collection',
      ctaLink: '/shop?brand=audi,porsche',
      imageBg: 'bg-gradient-to-br from-red-900 to-gray-900',
      discount: '10% OFF',
      productImage: '/images/audi-porsche-parts.jpg', // You'll need to add this image
      highlight: 'New Stock',
      price: 'Nationwide Delivery',
    },
    {
      id: 4,
      title: 'Mercedes-Benz Parts',
      subtitle: 'OEM Quality & Fit',
      description:
        'Genuine-style body parts for Mercedes-Benz C-Class, E-Class, S-Class and more',
      cta: 'Shop Mercedes',
      ctaLink: '/shop?brand=mercedes',
      imageBg: 'bg-gradient-to-br from-silver-800 to-gray-800',
      discount: 'WARRANTY',
      productImage: '/images/mercedes-parts.jpg', // You'll need to add this image
      highlight: 'Top Rated',
      price: 'Fitment Guarantee',
    },
  ];

  const handlePrevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  const handleNextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [handleNextSlide]);

  // Auto parts features
  const features = [
    {
      icon: <FaShippingFast className="text-blue-600 text-xl" />,
      title: 'Nationwide Delivery',
      description: 'Door-to-door across South Africa',
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-xl" />,
      title: 'Fitment Guarantee',
      description: 'VIN matching available',
    },
    {
      icon: <FaHeadset className="text-blue-600 text-xl" />,
      title: 'Expert Support',
      description: 'Parts specialists available',
    },
    {
      icon: <FaRegCreditCard className="text-blue-600 text-xl" />,
      title: 'Secure Payment',
      description: '100% protected transactions',
    },
  ];

  // Auto parts categories
  const categories = [
    {
      name: 'BMW Parts',
      icon: <MdDirectionsCar className="text-3xl" />,
      path: '/shop?brand=bmw',
      bg: 'from-blue-600 to-blue-800',
      brandColor: 'bg-blue-500',
    },
    {
      name: 'Audi Parts',
      icon: <MdDirectionsCar className="text-3xl" />,
      path: '/shop?brand=audi',
      bg: 'from-red-600 to-red-800',
      brandColor: 'bg-red-500',
    },
    {
      name: 'Mercedes Parts',
      icon: <MdDirectionsCar className="text-3xl" />,
      path: '/shop?brand=mercedes',
      bg: 'from-gray-600 to-gray-800',
      brandColor: 'bg-gray-500',
    },
    {
      name: 'Porsche Parts',
      icon: <MdDirectionsCar className="text-3xl" />,
      path: '/shop?brand=porsche',
      bg: 'from-black to-gray-800',
      brandColor: 'bg-black',
    },
    {
      name: 'All Body Parts',
      icon: <GiCarDoor className="text-3xl" />,
      path: '/shop?category=body-parts',
      bg: 'from-blue-900 to-gray-900',
      brandColor: 'bg-blue-700',
    },
  ];

  // Auto parts sub-categories
  const partTypes = [
    { name: 'Bumpers', path: '/shop?category=bumpers', icon: '🚗' },
    { name: 'Lights', path: '/shop?category=lights', icon: '💡' },
    { name: 'Mirrors', path: '/shop?category=mirrors', icon: '🔍' },
    { name: 'Body Panels', path: '/shop?category=body-panels', icon: '🔧' },
    { name: 'Trim & Moldings', path: '/shop?category=trim', icon: '✨' },
  ];

  return (
    <div className="w-full">
      {/* Main Hero Banner */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        <div className="w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center transition-opacity duration-500 ease-in-out ${
                slide.imageBg
              } ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Content container */}
              <div className="container mx-auto px-6 z-10 h-full flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                  {/* Text content */}
                  <div className="w-full md:w-1/2 text-white space-y-4 pl-4 md:pl-8">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                      {slide.highlight}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-lg opacity-90 max-w-lg">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                      <Link href={slide.ctaLink}>
                        <span className="inline-flex items-center px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/30">
                          {slide.cta}
                          <MdOutlineKeyboardArrowRight className="ml-1 text-xl" />
                        </span>
                      </Link>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80">{slide.price}</span>
                      </div>
                    </div>

                    {/* Quick contact info */}
                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href="tel:+27100234831"
                        className="flex items-center gap-2 text-white/90 hover:text-white"
                      >
                        <FaHeadset />
                        <span className="text-sm">010 023 4831</span>
                      </a>
                      <span className="text-white/30">|</span>
                      <a
                        href="mailto:sales@a2zautobodyparts.co.za"
                        className="text-sm text-white/90 hover:text-white"
                      >
                        sales@a2zautobodyparts.co.za
                      </a>
                    </div>
                  </div>

                  {/* Product image area */}
                  <div className="w-full md:w-1/2 relative h-full flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                      {/* Discount/Warranty badge */}
                      <div className="absolute -top-4 -right-4 z-10 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center transform rotate-12 shadow-xl">
                        <span className="text-black font-bold text-xs text-center px-2">
                          {slide.discount}
                        </span>
                      </div>

                      {/* Brand badges */}
                      <div className="absolute -top-4 left-4 flex gap-2">
                        {slide.id === 1 && (
                          <>
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                              BMW
                            </span>
                            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                              Audi
                            </span>
                            <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                              Mercedes
                            </span>
                            <span className="bg-black text-white text-xs px-2 py-1 rounded">
                              Porsche
                            </span>
                          </>
                        )}
                      </div>

                      {/* Product container */}
                      <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden p-6">
                        {/* Placeholder for auto parts image */}
                        <div className="w-full h-64 bg-gradient-to-br from-white/20 to-transparent rounded-lg flex items-center justify-center relative">
                          <FaCar className="text-6xl text-white/40" />
                          {/* FIXED IMAGE TAG */}
                          <img
                            src="/images/banners/yellow.png"
                            alt="Yellow banner"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute bottom-4 text-white/70 text-sm">
                            {slide.id === 1 && 'Premium Auto Body Parts'}
                            {slide.id === 2 && 'BMW Body Components'}
                            {slide.id === 3 && 'Audi & Porsche Parts'}
                            {slide.id === 4 && 'Mercedes-Benz Parts'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous slide"
        >
          <MdKeyboardArrowLeft className="text-white text-xl md:text-2xl" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next slide"
        >
          <MdKeyboardArrowRight className="text-white text-xl md:text-2xl" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-150'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </div>

      {/* Features ribbon */}
      <div className="relative z-20 -mt-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Categories section - Brands */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Shop By Brand
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialists in premium German auto body parts
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {categories.map((category, index) => (
              <Link key={index} href={category.path} passHref>
                <div
                  className={`group relative overflow-hidden rounded-lg h-40 bg-gradient-to-br ${category.bg} shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 z-10">
                    <div
                      className={`w-12 h-12 rounded-full ${category.brandColor} flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </div>
                    <span className="text-lg font-semibold text-center text-white">
                      {category.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Part Types Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Popular Part Types
            </h3>
            <p className="text-gray-600">Browse by part category</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partTypes.map((part, index) => (
              <Link key={index} href={part.path} passHref>
                <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center border border-gray-100">
                  <div className="text-3xl mb-2">{part.icon}</div>
                  <span className="font-medium text-gray-800 group-hover:text-blue-600">
                    {part.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-900 to-gray-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">
                Need Help Finding Parts?
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Our specialists can help you find the exact body part for your
                vehicle with VIN matching service
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="tel:+27100234831"
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <FaHeadset className="mr-2" />
                  Call: 010 023 4831
                </a>
                <a
                  href="/vin-matching"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Use VIN Matching Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
