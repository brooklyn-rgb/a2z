'use client';

import ProductAdditionalInfo, {
  ComponentShowOnType,
} from '@/components/common/ProductAdditionalInfo';
import { PATH_SELLER } from '@/utils/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsDot } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import ImageGallery from './ImageGallery';
import Information from './Information';
import { useGetSellerProductQuery } from '@/redux/services/productApi';

export default function Page({ params }: { params: { id: string } }) {
  // Pass the product ID directly as a string
  const { data } = useGetSellerProductQuery(params.id);
  const router = useRouter();

  if (!data?._id) return undefined;

  return (
    <div className="w-full h-full">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-[24px] text-primary-100 font-bold">
            Product Details
          </h1>
          <div className="mt-[5px] text-[14px] flex items-center h-8 space-x-4">
            <Link
              href={PATH_SELLER.overview}
              className=" text-primary-100 hover:underline"
            >
              Dashboard
            </Link>
            <BsDot className="text-gray-600" />
            <span className="text-gray-600">Products / {data.title}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() =>
              router.push(`${PATH_SELLER.products.edit}/${params.id}`)
            }
            className="px-[16px] py-[6px] bg-primary flex items-center rounded-[8px] text-white font-bold text-sm active:scale-95 duration-200"
          >
            <MdEdit className="mr-2" /> <span>Edit Product</span>
          </button>
        </div>
      </header>

      <div className="w-full min-h-[400px]">
        <div className="bg-white flex flex-row">
          <ImageGallery images={data.images} />
          {/** /@ts-ignore */}
          <Information data={data} />
        </div>

        <ProductAdditionalInfo
          specification={data.specification}
          description={data.description}
          componentFor={ComponentShowOnType.SellerDashboardProductDetails}
          productId={data._id}
          totalReview={data.ratings?.totalReviews || 0}
        />
      </div>
    </div>
  );
}
