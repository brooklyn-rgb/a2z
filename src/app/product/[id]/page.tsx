'use client';

import Button from '@/components/common/Button';
import BuyNowButton from '@/components/common/BuyNowButton';
import { LoadingPage } from '@/components/common/loading';
import ProductAdditionalInfo, {
  ComponentShowOnType,
} from '@/components/common/ProductAdditionalInfo';
import { CartDataTypes, addToCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useGetProductDetailsQuery } from '@/redux/services/productApi';
import { ProductTypes } from '@/types/product.types';
import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';
import DisplayImage from './DisplayImage';
import Info from './Info';

export default function ProductPage() {
  const { id } = useParams(); // Get id from URL params
  const productId = Array.isArray(id) ? id[0] : id || '';
  
  const { data, isLoading, isError } = useGetProductDetailsQuery(productId);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      router.back();
    }
  }, [isError, router]);

  if (isLoading) return <LoadingPage />;
  if (!data) return null;

  const product = data as ProductTypes;

  const handleAddToCart = () => {
    if (!product._id) return;

    // Use nested structure from 2025 MongoDB seed
    const displayImg =
      product.images?.[0]?.defaultImg || '/images/placeholder.png';

    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: displayImg,
      price: product.price,
      discountPrice: product.discountPrice || 0,
      discountPercent: product.discountPercent || 0,
      productId: product._id,
      brand: product.brand || '',
      category: product.category || '',
    };

    dispatch(addToCart({ data: cartItem, quantity: 1 }));
    alert(`${product.title} added to cart!`);
  };

  return (
    <main className="min-h-[60vh] max-w-[1200px] w-full m-auto px-4 pb-10">
      <nav className="py-6 text-sm text-gray-500">
        <a href="/" className="hover:text-blue-900 transition-colors">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="/shop" className="hover:text-blue-900 transition-colors">
          Shop
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-bold uppercase">
          {product.brand}
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="w-full lg:w-1/2">
          <DisplayImage images={product.images} />
        </div>
        <div className="w-full lg:w-1/2">
          <Info data={product} />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 border-t pt-8">
            <Button
              onClick={handleAddToCart}
              className="flex-1 py-4 bg-white border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all"
            >
              Add to Cart
            </Button>
            <div className="flex-1">
              <BuyNowButton
                product={{
                  _id: product._id,
                  title: product.title,
                  price: product.price,
                  discountPrice: product.discountPrice,
                  discountPercent: product.discountPercent,
                  brand: product.brand,
                  category: product.category,
                  images: product.images,
                }}
              />
            </div>
          </div>
          <p className="mt-4 text-[10px] text-gray-400 text-center uppercase tracking-tighter">
            * Use VIN for fitment guarantee
          </p>
        </div>
      </div>

      <div className="mt-16">
        <ProductAdditionalInfo
          componentFor={ComponentShowOnType.UserProductDetails}
          specification={product.specification}
          description={product.description}
          productId={product._id}
          totalReview={product.ratings?.totalReviews}
        />
      </div>
    </main>
  );
}
