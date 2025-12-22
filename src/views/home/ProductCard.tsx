'use client';

import Button from '@/components/common/Button';
import PlaceholderImage from '@/components/common/PlaceholderImage';
import StarRating from '@/components/common/StarRating';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ProductListType } from '@/types/product.types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Add this import
import { FC, useState } from 'react';

interface IProps {
  product: ProductListType;
}

const ProductCard: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter(); // Add router
  const [imgError, setImgError] = useState(false);

  const displayImage = product?.images?.[0]?.defaultImg;
  const hasValidImage = displayImage && !imgError;

  const selPrice =
    product.discountPrice > 0 && product.discountPercent > 0
      ? product.discountPrice
      : product.price;

  const handleAddToCart = () => {
    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: displayImage || '',
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercent: product.discountPercent,
      productId: product._id,
      brand: product.brand,
      category: product.category,
    };
    dispatch(addToCart({ data: cartItem, quantity: 1 }));

    // Option 1: Navigate to cart immediately
    router.push('/cart');

    // Option 2: Show success message and stay on page
    // alert('Item added to cart!');
  };

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative border border-gray-100">
      {/* Product Image - Goes to product page */}
      <Link
        href={`/product/${product._id}`}
        className="block relative aspect-square overflow-hidden"
      >
        <div className="relative w-full h-full bg-gray-50">
          {hasValidImage ? (
            <Image
              src={displayImage}
              alt={product.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105 p-4"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImgError(true)}
              priority={false}
            />
          ) : (
            <PlaceholderImage
              brand={product.brand}
              category={product.category}
              className="w-full h-full"
            />
          )}

          {product.discountPercent > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
              {product.discountPercent}% OFF
            </div>
          )}
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded">
            {product.brand || product.category}
          </span>
        </div>

        <Link href={`/product/${product._id}`} className="block">
          <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 min-h-[40px]">
            {product.title}
          </h3>
        </Link>

        {/* Price & Rating */}
        <div className="mt-3 flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              R {selPrice.toLocaleString()}
            </span>
            {product.discountPrice > 0 &&
              product.price > product.discountPrice && (
                <del className="text-xs text-gray-400">
                  R {product.price.toLocaleString()}
                </del>
              )}
          </div>

          <div className="flex items-center space-x-1">
            <StarRating rating={product.ratings.star} />
            <span className="text-[10px] text-gray-400">
              ({product.ratings.totalReviews})
            </span>
          </div>
        </div>

        {/* Add two buttons: Quick Add and View Cart */}
        <div className="mt-4 flex gap-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 py-2 bg-blue-900 text-white hover:bg-blue-800 transition-colors rounded-lg font-medium text-xs shadow-sm"
          >
            Add to Cart
          </Button>
          <Button
            onClick={() => router.push('/cart')}
            className="flex-1 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors rounded-lg font-medium text-xs shadow-sm"
          >
            View Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
