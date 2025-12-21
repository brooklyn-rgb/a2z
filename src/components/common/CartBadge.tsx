"use client"; // Ensure this is at the very top

import { useEffect, useState } from 'react';

const CartBadges = ({
  number,
  className = '',
}: {
  number: number;
  className?: string;
}) => {
  // 1. Add mounted state
  const [mounted, setMounted] = useState(false);

  // 2. Set mounted to true once the browser loads
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. Logic for the display number
  const displayValue = number > 9 ? '9+' : number;

  return (
    <div
      className={`w-5 h-5 bg-primary text-white rounded-full flex justify-center items-center text-xs font-medium shadow-sm ${className}`}
    >
      {/* 4. Only show the real number if mounted, otherwise show 0 to match server */}
      {mounted ? displayValue : 0}
    </div>
  );
};

export default CartBadges;
