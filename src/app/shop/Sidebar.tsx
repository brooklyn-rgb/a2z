'use client';

import CheckBox from '@/components/common/CheckBox';
import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FaCar, FaFilter } from 'react-icons/fa';

export default function Sidebar() {
  const { data, isSuccess, isLoading } = useGetCategoryQuery();
  const [priceLength, setPriceLength] = useState<number>(0);
  const [prices, setPrices] = useState<{
    startPrice: number;
    endPrice: number;
  }>({
    startPrice: 0,
    endPrice: 0,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('category');
  const brandName = searchParams.get('brand');

  // Auto parts specific categories (you should update your backend categories)
  const autoPartsCategories = [
    'Body Panels',
    'Bumpers & Grilles',
    'Lights & Lighting',
    'Mirrors & Glass',
    'Trim & Moldings',
    'Doors & Components',
    'Hoods & Trunks',
    'Fenders & Quarter Panels',
  ];

  const carBrands = [
    { name: 'BMW', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Audi', color: 'text-red-600', bg: 'bg-red-50' },
    { name: 'Mercedes', color: 'text-gray-600', bg: 'bg-gray-50' },
    { name: 'Porsche', color: 'text-black', bg: 'bg-gray-100' },
  ];

  const categoryLoadingSkeleton = (
    <>
      <Skeleton width={'100%'} height={24} className="mb-3 rounded" />
      <Skeleton width={'100%'} height={24} className="mb-3 rounded" />
      <Skeleton width={'100%'} height={24} className="mb-3 rounded" />
      <Skeleton width={'100%'} height={24} className="mb-3 rounded" />
      <Skeleton width={'100%'} height={24} className="mb-3 rounded" />
    </>
  );

  // INPUT HANDLER
  const inputPriceChangeHandler = (
    field: 'startPrice' | 'endPrice',
    value: string
  ) => {
    const input = parseFloat(value);

    if (isNaN(input)) return;

    setPrices(prevS => ({
      ...prevS,
      [field]: Number(input),
    }));
  };

  // PRICE INPUT HANDLER
  const priceInputFilterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const queryParams = new URLSearchParams(window.location.search);

    if (
      isNaN(prices.startPrice) ||
      isNaN(prices.endPrice) ||
      prices.startPrice < 0 ||
      prices.endPrice < 0
    )
      return;

    queryParams.set('startPrice', prices.startPrice.toString());
    queryParams.set('endPrice', prices.endPrice.toString());
    router.replace(`/shop?${queryParams.toString()}`);
  };

  // CATEGORY SELECT HANDLER
  const selectCategoryHandler = (category: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (category === categoryName) {
      queryParams.delete('category');
    } else {
      queryParams.set('category', category);
    }
    router.replace(`/shop?${queryParams.toString()}`);
  };

  // BRAND SELECT HANDLER
  const selectBrandHandler = (brand: string) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (brand === brandName) {
      queryParams.delete('brand');
    } else {
      queryParams.set('brand', brand);
    }
    router.replace(`/shop?${queryParams.toString()}`);
  };

  // SELECT PRE CREATED PRICE RANGE
  const priceOnSelectFilterHandler = (priceListLength: number) => {
    const queryParams = new URLSearchParams(window.location.search);

    if (priceLength === priceListLength) {
      setPriceLength(0);
      queryParams.delete('startPrice');
      queryParams.delete('endPrice');
      return router.replace(`/shop?${queryParams}`);
    } else {
      setPriceLength(priceListLength);

      if (priceRangeList[priceListLength].text === 'All Price') {
        queryParams.delete('startPrice');
        queryParams.delete('endPrice');
        return router.replace(`/shop?${queryParams}`);
      }

      queryParams.set(
        'startPrice',
        priceRangeList[priceListLength].startPrice.toString()
      );
      queryParams.set(
        'endPrice',
        priceRangeList[priceListLength].endPrice.toString()
      );
      router.replace(`/shop?${queryParams.toString()}`);
    }
  };

  return (
    <div className="bg-white pt-6 px-5 rounded-xl shadow-sm border border-gray-200 mb-6 max-w-[300px]">
      <div className="flex items-center mb-6">
        <FaFilter className="text-blue-600 mr-2" />
        <h1 className="text-xl font-bold text-gray-900">Filter Parts</h1>
      </div>

      {/* Brands Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <FaCar className="mr-2 text-gray-500" />
          Shop by Brand
        </h2>
        <div className="space-y-2">
          {carBrands.map((brand) => (
            <div
              key={brand.name}
              onClick={() => selectBrandHandler(brand.name)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:scale-[1.02] ${brand.bg} ${brandName === brand.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
            >
              <CheckBox
                name={brand.name}
                isChecked={brandName === brand.name}
              />
              <span className={`ml-3 font-medium ${brand.color}`}>
                {brand.name} Parts
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-8 border-t pt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Part Categories</h2>
        <ul className="space-y-2">
          {isLoading && categoryLoadingSkeleton}

          {isSuccess ? (
            data.data.map(category => (
              <li
                key={category._id}
                onClick={() => selectCategoryHandler(category.name)}
                className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <CheckBox
                  name={category.name}
                  isChecked={
                    categoryName
                      ? categoryName.trim().toLowerCase() ===
                        category.name.toLowerCase()
                      : false
                  }
                />
                <span className="ml-3 text-gray-700">{category.name}</span>
              </li>
            ))
          ) : (
            // Fallback to auto parts categories
            autoPartsCategories.map((category, index) => (
              <li
                key={index}
                onClick={() => selectCategoryHandler(category)}
                className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <CheckBox
                  name={category}
                  isChecked={categoryName === category}
                />
                <span className="ml-3 text-gray-700">{category}</span>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="border-t pt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h2>
        
        <div className="mb-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <Input
              placeholder="Min R"
              containerClassName="flex-1"
              type="number"
              min={0}
              value={prices.startPrice === 0 ? '' : prices.startPrice}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputPriceChangeHandler('startPrice', event.target.value)
              }
              onKeyDown={priceInputFilterHandler}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
            />
            <span className="text-gray-400">to</span>
            <Input
              placeholder="Max R"
              containerClassName="flex-1"
              type="number"
              min={0}
              value={prices.endPrice === 0 ? '' : prices.endPrice}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                inputPriceChangeHandler('endPrice', event.target.value)
              }
              onKeyDown={priceInputFilterHandler}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <button 
            onClick={() => priceInputFilterHandler({key: 'Enter'} as any)}
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Apply Price Filter
          </button>
        </div>

        <ul className="space-y-2">
          {priceRangeList.map((price, i) => (
            <li
              key={price.id}
              onClick={() => priceOnSelectFilterHandler(i)}
              className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <CheckBox name={price.text} isChecked={i === priceLength} />
              <span className="ml-3 text-gray-700">{price.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const priceRangeList = [
  {
    id: 1,
    text: 'All Price',
    startPrice: 1,
    endPrice: 0,
  },
  {
    id: 2,
    text: 'Under R500',
    startPrice: 1,
    endPrice: 500,
  },
  {
    id: 3,
    text: 'R500 to R2000',
    startPrice: 500,
    endPrice: 2000,
  },
  {
    id: 4,
    text: 'R2000 to R5000',
    startPrice: 2000,
    endPrice: 5000,
  },
  {
    id: 5,
    text: 'R5000 to R10000',
    startPrice: 5000,
    endPrice: 10000,
  },
  {
    id: 6,
    text: 'R10000 to R25000',
    startPrice: 10000,
    endPrice: 25000,
  },
  {
    id: 7,
    text: 'R25000+',
    startPrice: 25000,
    endPrice: 100000,
  },
];