'use client';

import PaginationComponent from '@/components/common/PaginationComponent';
import Skeleton from '@/components/common/Skeleton';
import { LoadingPage } from '@/components/common/loading';
import { useLazyGetProductsQuery } from '@/redux/services/productApi'; // CHANGE THIS
import { ProductListApiQuery } from '@/types/product.types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCar, FaPercentage, FaTag, FaTruck } from 'react-icons/fa';
import Product from '../shop/Product';

const defaultBannerSate = {
  id: 4,
  bannerUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/auto-parts-banner-2.jpg',
  title: 'Premium Auto Parts Sale',
  subtitle: 'Limited Time Offers',
  link: '',
  offer: 15,
  brand: 'All Brands',
  color: 'from-blue-900 to-gray-900'
};

const banners = [
  {
    id: 1,
    bannerUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/bmw-parts-banner.jpg',
    title: 'BMW Body Parts Sale',
    subtitle: 'Up to 20% Off Select Parts',
    link: 'bmw-parts',
    offer: 20,
    brand: 'BMW',
    color: 'from-blue-700 to-blue-900'
  },
  {
    id: 2,
    bannerUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/audi-parts-banner.jpg',
    title: 'Audi Parts Special',
    subtitle: 'Exclusive Discounts on Lighting & Trim',
    link: 'audi-parts',
    offer: 25,
    brand: 'Audi',
    color: 'from-red-800 to-gray-900'
  },
  {
    id: 3,
    bannerUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/mercedes-parts-banner.jpg',
    title: 'Mercedes-Benz Deals',
    subtitle: 'Premium Parts at Reduced Prices',
    link: 'mercedes-parts',
    offer: 18,
    brand: 'Mercedes',
    color: 'from-gray-700 to-gray-900'
  },
  defaultBannerSate,
];

export default function Page() {
  const [getProducts, getProductsApi] = useLazyGetProductsQuery(); // CHANGE THIS
  const [pageLengthSate, setPageLengthState] = useState<number>(1);
  const [isInitialize, setIsInitialize] = useState<boolean>(false);
  const [banner, setBanner] = useState(defaultBannerSate);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  const pageLengthQuery = searchParams.get('pageLength');
  const offerIdQuery = searchParams.get('id');

  const getPageLength = (): number => {
    if (pageLengthQuery !== null) {
      const parsedPageLength = parseInt(pageLengthQuery, 10);
      if (!isNaN(parsedPageLength) && parsedPageLength > 0) {
        return parsedPageLength;
      }
    }
    return pageLengthSate;
  };

  const getOfferBannerData = () => {
    const queryId = Number(offerIdQuery);
    if (!queryId || isNaN(queryId) || queryId < 0 || queryId > banners.length) {
      return defaultBannerSate;
    }
    return banners[queryId - 1];
  };

  const query: ProductListApiQuery = {
    limit: 12,
    pageLength: getPageLength(),
    discountPercentUpTo: getOfferBannerData().offer,
  };

  // Filter by brand if specific banner is selected
  if (banner.brand !== 'All Brands') {
    query.brand = banner.brand;
  }

  const pageLengthHandler = (length: number) => {
    if (pageLengthSate === length) return;
    setPageLengthState(length);
    queryParams.set('pageLength', length.toString());
    router.replace(`/best-offers?${queryParams.toString()}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setPageLengthState(getPageLength());
  }, []);

  useEffect(() => {
    getProducts({ query: query });
  }, [pageLengthQuery, offerIdQuery]);

  useEffect(() => {
    if (isInitialize) return;
    setBanner(getOfferBannerData());
    setIsInitialize(true);
  }, [searchParams, isInitialize, router]);

  if (!isInitialize) return <LoadingPage />;
  if (!banner.id) return router.back();

  const loadingSkeleton = (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full pt-8">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
        >
          <Skeleton width="100%" height="220px" className="rounded-t-xl" />
          <div className="p-4">
            <Skeleton width="70%" height="20px" className="mb-2" />
            <Skeleton width="50%" height="20px" className="mb-3" />
            <div className="flex justify-between">
              <Skeleton width="40%" height="25px" />
              <Skeleton width="30%" height="25px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const zeroProducts = getProductsApi.data?.data.totals === 0 && (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-center py-12">
      <div className="text-6xl mb-6">🔧</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        No Special Offers Available
      </h3>
      <p className="text-gray-600 max-w-md mb-6">
        Currently there are no active offers for {banner.brand} parts. 
        Check back soon for new deals or browse our full catalog.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => router.push('/shop')}
          className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
        >
          Shop All Auto Parts
        </button>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );

  const productsList = getProductsApi?.data &&
    getProductsApi.data?.data.totals > 0 && (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full pt-8">
        {getProductsApi.data?.data.products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );

  const pagination = getProductsApi?.data &&
    getProductsApi.data?.data.totals > 0 && (
      <div className="w-full flex justify-center mt-12">
        <PaginationComponent
          currentPage={pageLengthSate}
          onChange={pageLengthHandler}
          totalProducts={getProductsApi.data?.data.totals}
          limit={12}
        />
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner Section */}
      <div className={`relative h-72 md:h-96 w-full overflow-hidden bg-gradient-to-r ${banner.color}`}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${banner.bannerUrl})` }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <FaPercentage className="text-white" />
              <span className="text-white font-semibold text-sm">
                LIMITED TIME OFFER
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {banner.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-200 mb-8 max-w-2xl">
              {banner.subtitle} • Save up to <span className="font-bold text-white">{banner.offer}%</span>
            </p>

            {/* Brand Badge */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <FaCar className="text-white" />
                <span className="text-white font-medium">{banner.brand} Parts</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaTruck />
                <span className="text-sm">Nationwide Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers Info Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-2">
              <FaTag className="text-red-500" />
              <span className="font-medium text-gray-900">
                Active Offers: <span className="text-blue-900">{banner.offer}% Off</span>
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Showing {getProductsApi.data?.data.totals || 0} discounted auto parts
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/shop')}
                className="text-sm text-blue-900 hover:text-blue-700 font-medium hover:underline"
              >
                View All Parts →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Discounted Auto Body Parts
          </h2>
          <p className="text-gray-600">
            Quality parts for {banner.brand} vehicles at special prices
          </p>
        </div>

        {/* Product Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-100">
            <button 
              onClick={() => {
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('id', '4');
                router.push(`/best-offers?${newParams.toString()}`);
              }}
              className={`px-4 py-2 rounded-lg font-medium ${banner.id === 4 ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Brands
            </button>
            <button 
              onClick={() => {
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('id', '1');
                router.push(`/best-offers?${newParams.toString()}`);
              }}
              className={`px-4 py-2 rounded-lg font-medium ${banner.id === 1 ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              BMW Parts
            </button>
            <button 
              onClick={() => {
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('id', '2');
                router.push(`/best-offers?${newParams.toString()}`);
              }}
              className={`px-4 py-2 rounded-lg font-medium ${banner.id === 2 ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Audi Parts
            </button>
            <button 
              onClick={() => {
                const newParams = new URLSearchParams(window.location.search);
                newParams.set('id', '3');
                router.push(`/best-offers?${newParams.toString()}`);
              }}
              className={`px-4 py-2 rounded-lg font-medium ${banner.id === 3 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Mercedes Parts
            </button>
          </div>

          {zeroProducts}
          {getProductsApi.isLoading ? loadingSkeleton : productsList}
          {pagination}
        </div>

        {/* Value Proposition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <div className="text-2xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-700 text-sm">
              Free nationwide delivery on orders over R1999
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <div className="text-2xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 mb-2">Fitment Guarantee</h3>
            <p className="text-gray-700 text-sm">
              All parts backed by our VIN matching guarantee
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <div className="text-2xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 mb-2">Warranty Included</h3>
            <p className="text-gray-700 text-sm">
              Minimum 12-month warranty on all parts
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Help Finding Parts?</h3>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Our specialists can help you find the exact body part for your vehicle 
            with VIN matching service
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+27100234831"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <span className="mr-2">📞</span>
              Call: 010 023 4831
            </a>
            <button
              onClick={() => router.push('/shop')}
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse All Parts
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}