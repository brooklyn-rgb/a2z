import Button from '@/components/common/Button';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FaCar, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

const Checkout = () => {
  const cart = useAppSelector(state => state.cartSlice);
  const router = useRouter();

  const gotToCheckoutHandler = () => router.push('/cart/checkout');

  // Calculate free shipping progress
  const freeShippingThreshold = 1999;
  const progressPercentage = Math.min((cart.subtotal / freeShippingThreshold) * 100, 100);
  const needsForFreeShipping = Math.max(freeShippingThreshold - cart.subtotal, 0);

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 max-w-[100%] h-full max-h-[500px] lg:max-w-[400px] p-4 md:p-6">
      <div className="w-full h-full">
        {/* Header */}
        <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <FaCar className="text-blue-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Order Summary</h1>
        </div>

        {/* Free Shipping Progress */}
        {cart.subtotal > 0 && cart.subtotal < freeShippingThreshold && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg border border-blue-100">
            <div className="flex items-center mb-2">
              <FaTruck className="text-green-600 mr-2" />
              <span className="font-medium text-gray-800">Free Shipping Progress</span>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Add R{needsForFreeShipping.toFixed(2)} more</span>
                <span>{progressPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Free nationwide shipping on orders over R{freeShippingThreshold}
            </p>
          </div>
        )}

        {/* Order Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Subtotal ({cart.totalQuantity} items)</span>
            <span className="font-semibold text-gray-900">R{cart.subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Shipping</span>
            <span className={`font-semibold ${cart.shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
              {cart.shippingFee === 0 ? 'FREE' : `R${cart.shippingFee.toFixed(2)}`}
            </span>
          </div>
          
          {cart.shippingFee > 0 && cart.subtotal > 0 && (
            <div className="text-sm text-blue-600 p-3 bg-blue-50 rounded-lg">
              <span className="font-medium">Add R{needsForFreeShipping.toFixed(2)} more for free shipping!</span>
            </div>
          )}

          <div className="flex items-center justify-between py-2 border-t border-gray-100 pt-4">
            <div>
              <span className="text-gray-800 font-medium">Total</span>
              <p className="text-xs text-gray-500">Including VAT</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">R{cart.totalAmount.toFixed(2)}</div>
              <p className="text-xs text-gray-500">R{(cart.totalAmount / 1.15).toFixed(2)} excl. VAT</p>
            </div>
          </div>
        </div>

        {/* Guarantee Badges */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <FaShieldAlt className="text-blue-600 mr-2" />
            <div>
              <p className="text-xs font-medium text-gray-800">Fitment Guarantee</p>
              <p className="text-xs text-gray-500">VIN verified parts</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
            <MdOutlineSecurity className="text-green-600 mr-2" />
            <div>
              <p className="text-xs font-medium text-gray-800">Secure Checkout</p>
              <p className="text-xs text-gray-500">256-bit encryption</p>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          type="button"
          onClick={gotToCheckoutHandler}
          disabled={cart.totalQuantity === 0}
          className={`w-full mt-2 bg-gradient-to-r from-blue-900 to-gray-900 hover:from-blue-800 hover:to-gray-800 text-white font-semibold py-3.5 rounded-lg transition-all duration-300 ${cart.totalQuantity === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg active:scale-[0.98]'}`}
        >
          {cart.totalQuantity === 0 ? 'Cart is Empty' : `Proceed to Checkout (${cart.totalQuantity} items)`}
        </Button>

        {/* Continue Shopping */}
        {cart.totalQuantity > 0 && (
          <button
            onClick={() => router.push('/shop')}
            className="w-full mt-4 text-center text-blue-900 hover:text-blue-700 font-medium text-sm hover:underline"
          >
            Continue Shopping →
          </button>
        )}

        {/* Payment Methods */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-3">We accept:</p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">VISA</span>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700">MC</span>
            </div>
            <div className="text-xs text-gray-500">+ 3 more</div>
          </div>
        </div>

        {/* Need Help */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Need help with parts selection?</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">
            Contact our specialists for VIN matching assistance
          </p>
          <a 
            href="tel:+27100234831"
            className="text-sm text-blue-900 hover:text-blue-700 font-medium inline-flex items-center"
          >
            <span className="mr-2">📞</span>
            Call 010 023 4831
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;