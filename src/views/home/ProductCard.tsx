import Button from '@/components/common/Button';
import StarRating from '@/components/common/StarRating';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ProductListType } from '@/types/product.types'; // 1. Added missing import
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

// 2. Corrected Interface: The card displays ONE product, not the whole array
interface IProps {
  product: ProductListType; 
}

const ProductCard: FC<IProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const addItems = () => {
    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: product.imgUrl,
      price: product.price,
      discountPrice: product.discountPrice,
      discountPercent: product.discountPercent,
      productId: product._id,
    };
    dispatch(addToCart({ data: cartItem, quantity: 1 }));
  };

  const selPrice =
    product.discountPrice > 0 && product.discountPercent > 0
      ? product.discountPrice
      : product.price;

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative">
      {/* Offer Badge */}
      {product.offerText && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
          <span className="truncate">{product.offerText}</span>
        </div>
      )}

      {/* Product Image */}
      <Link
        href={`/product/${product._id}`}
        className="block relative aspect-square overflow-hidden"
      >
        <div className="relative w-full h-full bg-gray-100">
          <Image
            src={product.imgUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {product.category}
        </span>

        {/* Product Title */}
        <Link href={`/product/${product._id}`} className="block mt-1">
          <h3 className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors line-clamp-2 h-[40px]">
            {product.title}
          </h3>
        </Link>

        {/* Price & Rating */}
        <div className="mt-3 flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${selPrice.toFixed(2)}
            </span>
            {product.discountPrice > 0 && (
              <del className="text-sm text-gray-400">
                ${product.price.toFixed(2)}
              </del>
            )}
            {product.discountPercent > 0 && (
              <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                {product.discountPercent}% OFF
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <StarRating rating={product.ratings.star} />
            <span className="text-xs text-gray-500">
              ({product.ratings.totalReviews})
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={addItems}
          className="mt-4 w-full py-2 bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-lg font-medium text-sm"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
