import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

// Import Swiper styles
import { ProductListType } from '@/types/product.types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
}

interface NewArrivalsProps {
 data: ProductListType[]; // Change from Product[] to ProductListType[
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ data }) => {
  if (data.length === 0) {
    return <div className="text-center py-10 text-gray-500">No new arrivals found.</div>;
  }

  return (
    <div className="relative">
     <Swiper>
      {data.map((product) => (
        <SwiperSlide key={product._id}>
          <ProductCard product={product} /> 
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default NewArrivals;
