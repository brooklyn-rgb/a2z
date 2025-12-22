// app/cart/page.tsx
'use client';

import Checkout from '@/app/cart/checkout/page';
import ItemContainer from '@/app/cart/ItemContainer';
import SellerLayout from '@/app/cart/SellerLayout';

export default function CartPage() {
  return (
    <SellerLayout>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6">
        <ItemContainer />
        <Checkout />
      </div>
    </SellerLayout>
  );
}
