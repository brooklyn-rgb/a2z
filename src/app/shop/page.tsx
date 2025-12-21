'use client';

import { useLazyGetProductsQuery } from '@/redux/services/productApi';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Product from './Product';

function ShopContent() {
  const searchParams = useSearchParams();
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize lazy queries
  const [getNewArrivals] = useLazyGetProductsQuery();
  const [getJustForYou] = useLazyGetProductsQuery();
  const [getFeaturedProducts] = useLazyGetProductsQuery();

  // Fetch all products on mount
  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      try {
        // Fetch multiple sets of products
        const [newArrivals, justForYou, featured] = await Promise.all([
          getNewArrivals({ query: { limit: 16, category: 'new' } }),
          getJustForYou({ query: { limit: 16, category: 'recommended' } }),
          getFeaturedProducts({ query: { limit: 16, featured: true } }),
        ]);

        // Combine all products
        const products = [
          ...(newArrivals.data?.data?.products || []),
          ...(justForYou.data?.data?.products || []),
          ...(featured.data?.data?.products || []),
        ];

        // Remove duplicates by _id
        const uniqueProducts = products.filter(
          (product, index, self) =>
            index === self.findIndex((p) => p._id === product._id)
        );

        setAllProducts(uniqueProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  if (isLoading) return <div className="p-10 text-center">Loading Auto Parts...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Shop Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.length ? (
          allProducts.map((product: any) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Shop Layout...</div>}>
      <ShopContent />
    </Suspense>
  );
}