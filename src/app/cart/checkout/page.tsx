// app/cart/checkout/page.tsx
'use client';

import CheckoutPage from '@/app/cart/Checkout';
import SellerLayout from '@/app/cart/SellerLayout';

export default function CheckoutPageWrapper() {
  return (
    <SellerLayout>
      <CheckoutPage />
    </SellerLayout>
  );
}
