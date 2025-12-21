'use client';

import { ProductListType } from '@/types/product.types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Absolute Essential Imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProductCard from './ProductCard';

interface IProps {
  data: ProductListType[];
}

const FeaturedProducts: FC<IProps> = ({ data }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  // 1. Force the component to wait until the browser is ready (Prevents Hydration Errors)
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  return (
    <section className="w-full relative mt-[22px] lg:mt-[60px] px-4 md:px-0">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">Featured Products</h1>
        <Link href="/shop" className="group flex items-center text-primary font-bold transition-all">
          <span className="hover:underline">More</span>
          <MdKeyboardArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* 2. The dynamic 'key' forces Swiper to rebuild if data changes from [] to [...] */}
      <Swiper
        key={`swiper-display-${data?.length || 0}`}
        modules={[Navigation, Pagination, Keyboard, Scrollbar]}
        spaceBetween={20}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full !pb-12"
      >
        {data && data.length > 0 ? (
          data.map((product) => (
            <SwiperSlide key={product._id} className="h-full">
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        ) : (
          <div className="py-10 text-center text-gray-400 w-full">No products available at the moment.</div>
        )}
      </Swiper>

      {/* 3. Global CSS Override to ensure arrows are visible */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #008ECC !important;
          background: white;
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #008ECC !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
