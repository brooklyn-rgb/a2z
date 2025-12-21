import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaCar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({ category = '', brand = '' }: { category: string | null; brand: string | null }) => {
  return (
    <div className="flex items-center w-full h-[48px] space-x-2 text-sm text-gray-600">
      <Link href="/">
        <div className="flex items-center hover:text-blue-600 transition-colors">
          <AiFillHome /> 
          <span className="ml-1">Home</span>
        </div>
      </Link>

      <IoIosArrowForward className="text-gray-400" />

      <Link href="/shop">
        <div className="flex items-center hover:text-blue-600 transition-colors">
          <FaCar className="mr-1" />
          <span>Auto Parts</span>
        </div>
      </Link>

      {brand && (
        <>
          <IoIosArrowForward className="text-gray-400" />
          <div className="flex items-center text-blue-700 font-medium">
            <span className="capitalize">{brand} Parts</span>
          </div>
        </>
      )}

      {category && (
        <>
          <IoIosArrowForward className="text-gray-400" />
          <div className="flex items-center text-gray-700 max-w-[120px]">
            <span className="capitalize">{category}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;