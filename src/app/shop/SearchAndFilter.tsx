import Button from '@/components/common/Button';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { FaCar, FaFilter } from 'react-icons/fa';

interface IProps {
  totalItems: number;
}

const SearchAndFilter: FC<IProps> = ({ totalItems }) => {
  const [pageQuery, setPageQuery] = useState({
    category: '',
    brand: '',
    startPrice: '',
    endPrice: '',
  });

  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const brand = searchParams.get('brand');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');

  useEffect(() => {
    setPageQuery({
      category: category ?? '',
      brand: brand ?? '',
      startPrice: startPrice ?? '',
      endPrice: endPrice ?? '',
    });
  }, [category, brand, startPrice, endPrice]);

  const clearFilters = () => {
    window.location.href = '/shop';
  };

  return (
    <div className="mt-4 w-full bg-gradient-to-r from-blue-900 to-gray-900 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-4 rounded-xl shadow-lg">
      <div className="flex items-center mb-3 md:mb-0">
        <FaFilter className="mr-2 text-blue-300" />
        <h2 className="text-sm md:text-base font-medium text-blue-100">Active Filters:</h2>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-0">
        {pageQuery.brand && (
          <Button className="flex items-center space-x-2 cursor-pointer bg-blue-800 hover:bg-blue-700 active:scale-95 duration-150 rounded-lg px-3 py-1.5">
            <FaCar />
            <span className="font-medium">{pageQuery.brand} Parts</span>
          </Button>
        )}

        {pageQuery.category && (
          <Button className="flex items-center space-x-2 cursor-pointer bg-gray-800 hover:bg-gray-700 active:scale-95 duration-150 rounded-lg px-3 py-1.5">
            <span className="font-medium">{pageQuery.category}</span>
          </Button>
        )}

        {pageQuery.startPrice && pageQuery.endPrice && (
          <Button className="flex items-center space-x-2 cursor-pointer bg-green-800 hover:bg-green-700 active:scale-95 duration-150 rounded-lg px-3 py-1.5">
            <span className="font-medium">
              R{pageQuery.startPrice} - R{pageQuery.endPrice}
            </span>
          </Button>
        )}

        {(pageQuery.category || pageQuery.brand || pageQuery.startPrice) && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-300 hover:text-white underline ml-2"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex items-center space-x-2 text-sm md:text-base bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
        <h3 className="font-bold text-white">{totalItems}</h3>
        <p className="text-blue-200">Auto Parts Found</p>
      </div>
    </div>
  );
};

export default SearchAndFilter;