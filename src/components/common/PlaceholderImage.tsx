'use client';

import { FC } from 'react';

interface PlaceholderImageProps {
  brand?: string;
  category?: string;
  className?: string;
}

const PlaceholderImage: FC<PlaceholderImageProps> = ({
  brand,
  category,
  className = '',
}) => {
  // Brand-based colors
  const getBrandColor = () => {
    const brandName = (brand || '').toLowerCase();
    if (brandName.includes('bmw')) return 'bg-blue-600';
    if (brandName.includes('audi')) return 'bg-red-600';
    if (brandName.includes('mercedes') || brandName.includes('benz'))
      return 'bg-gray-600';
    if (brandName.includes('porsche')) return 'bg-black';
    return 'bg-blue-900';
  };

  const getText = () => {
    if (brand && category) return `${brand} ${category}`;
    if (brand) return brand;
    if (category) return category;
    return 'Auto Parts';
  };

  return (
    <div
      className={`${getBrandColor()} flex items-center justify-center text-white ${className}`}
    >
      <div className="text-center p-4">
        <div className="text-2xl mb-2">🚗</div>
        <div className="text-xs font-medium uppercase tracking-wider">
          {getText()}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
