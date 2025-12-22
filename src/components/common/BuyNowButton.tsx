// components/common/BuyNowButton.tsx
'use client';

import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import Button from './Button';

// src/components/common/BuyNowButton.tsx
interface BuyNowButtonProps {
  product: {
    _id: string;
    title: string;
    price: number;
    discountPrice?: number;
    discountPercent?: number;
    brand?: string;
    category?: string;
    images?: {
      // <--- Plural 'images'
      defaultImg: string;
      publicId: string;
    }[];
  };
}

const BuyNowButton: FC<BuyNowButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleBuyNow = () => {
    // FIX: Extract the image from the array using the same logic as ProductCard
    const displayImage =
      product.images?.[0]?.defaultImg || '/images/placeholder.png';

    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: displayImage,
      price: product.price,
      discountPrice: product.discountPrice || 0,
      discountPercent: product.discountPercent || 0,
      productId: product._id,
      brand: product.brand || '',
      category: product.category || '',
    };

    // 1. Add to cart
    dispatch(addToCart({ data: cartItem, quantity: 1 }));

    // 2. Immediate redirect to checkout
    router.push('/cart/checkout');
  };

  return (
    <Button
      onClick={handleBuyNow}
      className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
