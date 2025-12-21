'use client';

import { LoadingPage } from '@/components/common/loading';
import ProductAdditionalInfo, { ComponentShowOnType } from '@/components/common/ProductAdditionalInfo';
import { useGetProductDetailsQuery } from '@/redux/services/productApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import DisplayImage from './DisplayImage';
import Info from './Info';

export default function ProductClientPage({ id }: { id: string }) {
  // Pass the id string directly, NOT as an object
  const { data, isLoading, isError } = useGetProductDetailsQuery(id);
  const router = useRouter();

  if (isLoading) return <LoadingPage />;
  if (isError || !data?.data) {
    router.back();
    return null;
  }

  const product = data.data;

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      {/* Breadcrumbs and UI Content */}
      <div className="flex items-center w-full h-[48px] space-x-2 text-[12px] uppercase text-primary">
        <Link href="/"><AiFillHome /> Home</Link>
        <IoIosArrowForward />
        <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
        <IoIosArrowForward />
        <span className="text-gray-500 line-clamp-1">{product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between transition-all duration-200">
        <DisplayImage images={product.images} />
        <Info data={product} />
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
