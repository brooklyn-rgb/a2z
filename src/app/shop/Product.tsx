import StarRating from '@/components/common/StarRating';
import { ProductListType } from '@/types/product.types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  product: ProductListType;
}

const Product: FC<IProps> = ({ product }) => {
  const selPrice =
    product.discountPrice > 0 && product.discountPercent > 0
      ? product.discountPrice
      : product.price;

  return (
    <Link href={`/product/${product._id}`}>
      <div className="h-full w-[100%] bg-white rounded-[6px] p-[5px] md:p-[10px] relative hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group border border-gray-200">
        {product.offerText && (
          <div className="bg-blue-900 line-clamp-1 rounded-[3px] text-white absolute left-[7px] top-[7px] text-[10px] z-[5] px-[10px] py-[5px]">
            {product.offerText}
          </div>
        )}

        <div className="w-full relative max-w-[100%] h-[135px] md:h-[190px] overflow-hidden z-[3] rounded-[10px] bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer">
          <Image
            fill
            className="w-full h-full group-hover:scale-110 duration-150 object-contain p-2"
            src={product.imgUrl}
            alt="auto body part"
          />
        </div>

        <div className="mt-[10px]">
          <div className="flex items-center">
            <StarRating rating={product.ratings.star} />
            <p className="text-[10px] font-medium text-gray-500 pt-[5px] ml-[8px]">
              ({product.ratings.totalReviews})
            </p>
          </div>

          <h1 className="line-clamp-2 text-[13px] lg:text-[16px] mt-[6px] font-medium text-gray-800">
            {product.title}
          </h1>

          <div className="mt-[7px] lg:mt-[12px] flex items-center justify-between">
            <div className="text-[16px] font-bold text-primary">
              R{selPrice}
            </div>
            {product.discountPrice > 0 && (
              <div className="flex items-center space-x-2">
                <del className="text-gray-500 text-sm">R{product.price}</del>
                {product.discountPercent > 0 && (
                  <span className="bg-blue-100 text-blue-900 text-xs px-2 py-[1px] rounded-[6px]">
                    {product.discountPercent}%
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="mt-2 text-[10px] text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">Auto Part</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;