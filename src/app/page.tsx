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
  // Increase limits to ensure data is fetched
  const { data: featuredData, isLoading: featuredLoading } =
    useGetProductsQuery({
      query: { limit: 15, featured: true },
    });

  const { data: newArrivalsData, isLoading: arrivalsLoading } =
    useGetProductsQuery({
      query: { limit: 15, sort: '-createdAt' },
    });

  const { data: justForYouData, isLoading: justForYouLoading } =
    useGetProductsQuery({
      query: { limit: 15 },
    });

  // Extract arrays safely
  const arrivals = newArrivalsData?.data?.products || [];
  const featured = featuredData?.data?.products || [];
  const justForYou = justForYouData?.data?.products || [];

  return (
    <main className="min-h-screen w-full m-auto mt-4 px-4">
      <div className="w-full max-w-[1400px] mx-auto">
        <HeroSection />

        {/* Brand Banner */}
        <div className="my-8 p-6 bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl text-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            German Automotive Specialists
          </h2>
          <p className="opacity-90 mb-4">
            Premium body parts for BMW, Audi, Mercedes-Benz & Porsche
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {['BMW', 'Audi', 'Mercedes-Benz', 'Porsche'].map(brand => (
              <div
                key={brand}
                className="bg-white/10 px-4 py-2 rounded-lg border border-white/20"
              >
                <span className="font-semibold">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 1. New Arrivals Section - FIXED: Pass 'data' array directly */}
        <section className="md:mt-[40px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <a href="/shop" className="text-blue-600 font-medium">
              View All →
            </a>
          </div>

          {arrivalsLoading ? (
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} height={280} />
              ))}
            </div>
          ) : (
            /* Pass the array 'arrivals' to the component that handles Swiper */
            <NewArrivals data={arrivals} />
          )}
        </section>

        {/* Services Grid */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold mb-2">Nationwide Delivery</h3>
            <p className="text-gray-600 text-sm">
              Door-to-door shipping in South Africa
            </p>
          </div>
          <div className="border p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold mb-2">VIN Matching</h3>
            <p className="text-gray-600 text-sm">
              Guaranteed fitment verification
            </p>
          </div>
          <div className="border p-6 rounded-lg text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm">OEM-spec & Premium parts</p>
          </div>
        </div>

        {/* 2. Just For You Section */}
        <section>
          {justForYouLoading ? (
            <Skeleton height={280} />
          ) : (
            <JustForYou data={justForYou} />
          )}
        </section>

        <SponsoredItem />

        {/* 3. Featured Products Section */}
        <section>
          {featuredLoading ? (
            <Skeleton height={280} />
          ) : (
            <FeaturedProducts data={featured} />
          )}
        </section>
      </div>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
