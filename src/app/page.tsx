'use client';

import Skeleton from '@/components/common/Skeleton';
import { useGetProductsQuery } from '@/redux/services/productApi';
import FeaturedProducts from '@/views/home/FeaturedProducts';
import HeroSection from '@/views/home/HeroSection';
import JustForYou from '@/views/home/JustForYou';
import NewArrivals from '@/views/home/NewArrivals';
import SponsoredItem from '@/views/home/SponsoredItem';
import { Suspense } from 'react';

function HomeContent() {
  // 1. Fetch Featured Products
  const { 
    data: featuredData, 
    isLoading: featuredLoading 
  } = useGetProductsQuery({
    query: { limit: 15, featured: true }
  });

  // 2. Fetch New Arrivals
  const { 
    data: newArrivalsData, 
    isLoading: arrivalsLoading 
  } = useGetProductsQuery({
    query: { limit: 4, sort: '-createdAt' }
  });

  // 3. Fetch Just For You Products
  const { 
    data: justForYouData, 
    isLoading: justForYouLoading 
  } = useGetProductsQuery({
    query: { limit: 4 } // Adjust query parameters as needed
  });

  return (
    <main className="min-h-screen w-full m-auto mt-4 px-4">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Hero Section - Maintains original component API */}
        <HeroSection />
        
        {/* Auto Parts Brand Specialization Banner */}
        <div className="my-8 p-6 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Specialized in German Automotive Excellence</h2>
          <p className="opacity-90 mb-4">Premium body parts exclusively for BMW, Audi, Mercedes-Benz & Porsche</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            {['BMW', 'Audi', 'Mercedes-Benz', 'Porsche'].map((brand) => (
              <div key={brand} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>

      {/* 1. New Arrivals Section */}
<section>
  <div className="md:mt-[40px]">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">New Arrivals</h2>
      <a href="/shop" className="text-blue-600 hover:text-blue-800 font-medium">
        View All →
      </a>
    </div>
    
    {arrivalsLoading ? (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="w-[100%]" height={280} />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
        {newArrivalsData?.data?.products?.length ? (
          newArrivalsData.data.products.map((product: any) => (
            <NewArrivals data={newArrivalsData?.data?.products || []} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No new arrivals found
          </div>
        )}
      </div>
    )}
  </div>
</section>

{/* Auto Parts Services Section */}
<div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="border border-gray-200 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
    <div className="text-3xl mb-3">🚚</div>
    <h3 className="font-bold text-lg mb-2">Nationwide Delivery</h3>
    <p className="text-gray-600 text-sm">Door-to-door shipping across South Africa</p>
  </div>
  <div className="border border-gray-200 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
    <div className="text-3xl mb-3">🔧</div>
    <h3 className="font-bold text-lg mb-2">VIN Matching</h3>
    <p className="text-gray-600 text-sm">Guaranteed fitment with VIN verification</p>
  </div>
  <div className="border border-gray-200 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
    <div className="text-3xl mb-3">✅</div>
    <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
    <p className="text-gray-600 text-sm">OEM-spec & premium aftermarket parts</p>
  </div>
</div>

        {/* 2. Just For You Section */}
        <section>
          {justForYouLoading ? (
            <div className="md:mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-[100%]" height={280} />
              ))}
            </div>
          ) : (
            <JustForYou data={justForYouData?.data?.products || []} />
          )}
        </section>

        {/* Sponsored/Promoted Auto Parts */}
        <SponsoredItem />

        {/* 3. Featured Products Section */}
        <section>
          {featuredLoading ? (
            <div className="md:mt-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] lg:gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="w-[100%]" height={280} />
              ))}
            </div>
          ) : (
            <FeaturedProducts data={featuredData?.data?.products || []} />
          )}
        </section>

        {/* Contact Section for Auto Parts */}
        <div className="my-12 p-8 bg-gray-50 rounded-xl text-center border border-gray-200">
          <h2 className="text-2xl font-bold mb-3">Need Help Finding the Right Part?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our specialists can help you find the exact body part for your BMW, Audi, Mercedes, or Porsche.
            Call us for VIN matching and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+27100234831"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              <span className="mr-2">📞</span>
              Call: 010 023 4831
            </a>
            <a
              href="mailto:sales@a2zautobodyparts.co.za"
              className="border border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors"
            >
              Email: sales@a2zautobodyparts.co.za
            </a>
          </div>
        </div>

        <br />
        <br />
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Homepage...</div>}>
      <HomeContent />
    </Suspense>
  );
}