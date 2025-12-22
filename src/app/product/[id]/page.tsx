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
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DisplayImage from './DisplayImage';
import Info from './Info';

interface ProductClientPageProps {
  id: string;
}

export default function ProductClientPage({ id }: ProductClientPageProps) {
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      router.back();
    }
  }, [isError, router]);

  if (isLoading) return <LoadingPage />;

  // Check if data exists and has the expected structure
  if (!data) {
    return null;
  }

  // Type assertion with proper import
  const product = data as ProductTypes;

  // Check if product has required properties
  if (!product?.title || !product?.images) {
    return null;
  }

  const handleAddToCart = () => {
    // 1. Validation check
    if (!product._id) return;

    const cartItem: CartDataTypes = {
      title: product.title,
      imgUrl: product.images?.[0]?.defaultImg || '/images/placeholder.png',
      price: product.price,
      discountPrice: product.discountPrice || 0,
      discountPercent: product.discountPercent || 0,
      productId: product._id,
      brand: product.brand || '',
      category: product.category || '',
    };

    // 2. Dispatch (Ensure this matches your cartSlice payload expectation)
    dispatch(addToCart({ data: cartItem, quantity: 1 }));

    // 3. Feedback (Temporary alert to verify the button works)
    alert(`${product.title} added to cart!`);
  };

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      {/* Breadcrumbs - add this if missing */}
      <div className="py-4 mb-6 border-b">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-blue-600">
            Shop
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.title}</span>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <DisplayImage images={product.images} />
        <Info data={product} />
      </div>

      {/* Add to Cart and Buy Now Buttons */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="flex gap-4">
          <Button
            onClick={handleAddToCart}
            className="flex-1 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Add to Cart
          </Button>

          <BuyNowButton
            product={{
              _id: product._id,
              title: product.title,
              price: product.price,
              discountPrice: product.discountPrice,
              discountPercent: product.discountPercent,
              brand: product.brand,
              category: product.category,
              // Change 'image' to 'images' and pass the whole array
              images: product.images,
            }}
          />
        </div>
      </div>

      <ProductAdditionalInfo
        componentFor={ComponentShowOnType.UserProductDetails}
        specification={product.specification}
        description={product.description}
        productId={product._id}
        totalReview={product.ratings?.totalReviews}
      />
    </main>
  );
}
