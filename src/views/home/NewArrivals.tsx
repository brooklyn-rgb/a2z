import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

interface NewArrivalsProps {
  data: any[];
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ data = [] }) => {
  // Use data length check to show empty state
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No new arrivals found.
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="pb-10"
    >
      {data.map(product => (
        <SwiperSlide key={product._id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewArrivals;
