// components/layout/Header.tsx
'use client';

import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const { totalQuantity } = useAppSelector(state => state.cartSlice);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-900">
            A2Z Auto Parts
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>

            {/* Cart with badge */}
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-xl text-gray-700 hover:text-blue-600" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; // Make sure to export it!
