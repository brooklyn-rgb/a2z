'use client';

import Button from '@/components/common/Button';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC, useMemo } from 'react';
import { FaCar, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

const Checkout: FC = () => {
  const cart = useAppSelector(state => state.cartSlice);
  const router = useRouter();

  const goToCheckoutHandler = () => router.push('/cart/shipping');

  // Constants
  const FREE_SHIPPING_THRESHOLD = 1999;
  const VAT_RATE = 0.15; // South Africa 15% VAT

  // Memoized calculations for performance
  const { progressPercentage, needsForFreeShipping, exclVat } = useMemo(() => {
    const progress = Math.min(
      (cart.subtotal / FREE_SHIPPING_THRESHOLD) * 100,
      100
    );
    const needed = Math.max(FREE_SHIPPING_THRESHOLD - cart.subtotal, 0);
    const excl = cart.totalAmount / (1 + VAT_RATE);

    return {
      progressPercentage: progress,
      needsForFreeShipping: needed,
      exclVat: excl,
    };
  }, [cart.subtotal, cart.totalAmount]);

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 max-w-full lg:max-w-[400px] p-4 md:p-6 sticky top-4">
      <div className="w-full h-full">
        {/* Header */}
        <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <FaCar className="text-blue-600" aria-hidden="true" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Order Summary</h1>
        </div>

        {/* Free Shipping Progress */}
        {cart.subtotal > 0 && cart.subtotal < FREE_SHIPPING_THRESHOLD && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg border border-blue-100">
            <div className="flex items-center mb-2">
              <FaTruck className="text-green-600 mr-2" />
              <span className="font-medium text-gray-800 text-sm">
                Free Shipping Progress
              </span>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>
                  Add R{needsForFreeShipping.toFixed(2)} more for free delivery
                </span>
                <span>{progressPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Order Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm py-1">
            <span className="text-gray-600">
              Subtotal ({cart.totalQuantity} items)
            </span>
            <span className="font-semibold text-gray-900">
              R{cart.subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm py-1">
            <span className="text-gray-600">Shipping Estimate</span>
            <span
              className={`font-semibold ${cart.shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}
            >
              {cart.shippingFee === 0
                ? 'FREE'
                : `R${cart.shippingFee.toFixed(2)}`}
            </span>
          </div>

          <div className="flex items-center justify-between py-2 border-t border-gray-100 mt-4 pt-4">
            <div>
              <span className="text-gray-900 font-bold text-lg">Total</span>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Including 15% VAT
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-blue-900">
                R{cart.totalAmount.toFixed(2)}
              </div>
              <p className="text-[10px] text-gray-400">
                R{exclVat.toFixed(2)} excl. VAT
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-6 grid grid-cols-2 gap-2">
          <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-100">
            <FaShieldAlt className="text-blue-600 mr-2 text-xs" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">
              VIN MATCH GUARANTEE
            </span>
          </div>
          <div className="flex items-center p-2 bg-gray-50 rounded border border-gray-100">
            <MdOutlineSecurity className="text-green-600 mr-2 text-xs" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">
              SECURE SSL PAYMENT
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <Button
          type="button"
          onClick={goToCheckoutHandler}
          disabled={cart.totalQuantity === 0}
          className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all shadow-md ${
            cart.totalQuantity === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-900 text-white hover:bg-blue-800 active:scale-[0.98]'
          }`}
        >
          {cart.totalQuantity === 0
            ? 'Your Cart is Empty'
            : `Proceed to Checkout`}
        </Button>

        {/* Help / VIN matching info */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-900">
          <p className="text-xs font-bold text-gray-900 mb-1">
            Unsure about fitment?
          </p>
          <p className="text-[11px] text-gray-600 mb-3">
            Provide your VIN at checkout for expert verification.
          </p>
          <a
            href="tel:+27100234831"
            className="text-xs text-blue-900 font-bold flex items-center hover:underline"
          >
            📞 CALL SPECIALIST: 010 023 4831
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
