'use client';

import Button from '@/components/common/Button';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { clearCartItems } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useCreateOrderMutation } from '@/redux/services/orderApi';
import { useGetUserAllShippingAddressQuery } from '@/redux/services/shippingAddressApi';
import { PATH_USER } from '@/utils/routes';
import uniqueCodeGenerator from '@/utils/uniqeCodeGenerator';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const Shipping: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // Redux State
  const cart = useAppSelector(state => state.cartSlice);
  const user = useAppSelector(state => state.authSlice.user);

  // Guest Form State
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    vinNumber: '', // Added for your auto parts niche
  });

  // API Hooks
  const {
    data: addressData,
    isLoading: isAddressLoading,
    refetch,
  } = useGetUserAllShippingAddressQuery();
  const [createOrder, createOrderApi] = useCreateOrderMutation();

  const [isAllowToCheckout, setIsAllowToCheckout] = useState<boolean>(false);

  // 1. REFETCH ADDRESS IF LOGGED IN
  useEffect(() => {
    if (user?._id) refetch();
  }, [user, refetch]);

  // 2. CHECK ELIGIBILITY (Guest or Logged In)
  useEffect(() => {
    const hasCartItems = cart.totalQuantity > 0;

    if (user?._id) {
      // Logic for logged in users
      const hasSavedAddress = addressData?.data && addressData.data.length > 0;
      setIsAllowToCheckout(!!(hasSavedAddress && hasCartItems));
    } else {
      // Logic for guests: ensure basic fields are filled
      const { firstName, email, address, phone } = guestInfo;
      const guestFormValid = firstName && email && address && phone;
      setIsAllowToCheckout(!!(guestFormValid && hasCartItems));
    }
  }, [addressData, user, cart.totalQuantity, guestInfo]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({ ...prev, [name]: value }));
  };

  // 3. HANDLE ORDER PLACEMENT
  const handlePlaceOrder = async () => {
    if (!isAllowToCheckout) return;

    const shippingDetails = user?._id
      ? addressData?.data?.find(a => a.isDefault) || addressData?.data?.[0]
      : guestInfo;

    try {
      await createOrder({
        order: {
          orderId: uniqueCodeGenerator({ optionalKey: 'order' }),
          totalAmount: cart.totalAmount,
          subtotalAmount: cart.subtotal,
          shippingFee: cart.shippingFee,
          items: cart.cartItems,
          shippingAddress: shippingDetails, // Send details to backend
          isGuest: !user?._id,
        },
      }).unwrap();
    } catch (err) {
      dispatch(
        showAlert({
          type: AlertType.Error,
          message: 'Order failed. Please try again.',
        })
      );
    }
  };

  // 4. AFTER ORDER SUCCESS
  useEffect(() => {
    if (createOrderApi.isSuccess) {
      dispatch(
        showAlert({
          type: AlertType.Success,
          message: 'Order placed successfully!',
        })
      );
      setTimeout(() => {
        dispatch(clearCartItems());
        router.replace(user?._id ? PATH_USER.order : '/');
      }, 1500);
    }
  }, [createOrderApi.isSuccess, dispatch, router, user]);

  return (
    <div className="w-full max-w-[900px] mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4">
      {/* LEFT: SHIPPING FORM */}
      <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6 flex items-center">
          <span className="mr-2">🚚</span> Delivery Information
        </h2>

        {user?._id ? (
          /* LOGGED IN VIEW */
          <div className="space-y-4">
            {addressData?.data?.length ? (
              addressData.data
                .filter(a => a.isDefault)
                .map(addr => (
                  <div
                    key={addr._id}
                    className="p-4 border-2 border-blue-500 bg-blue-50 rounded-lg"
                  >
                    <p className="font-bold">
                      {addr.firstName} {addr.lastName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {addr.address}, {addr.district}
                    </p>
                    <p className="text-sm text-gray-600">{addr.phone}</p>
                  </div>
                ))
            ) : (
              <Link
                href={PATH_USER.newShippingAddress}
                className="block p-4 border border-dashed border-gray-300 text-center rounded-lg hover:bg-gray-50"
              >
                + Add New Shipping Address
              </Link>
            )}
          </div>
        ) : (
          /* GUEST FORM VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 p-3 bg-blue-50 text-blue-800 text-xs rounded mb-2">
              Checkout as guest or{' '}
              <Link href="/auth" className="font-bold underline">
                Login
              </Link>{' '}
              to use saved addresses.
            </div>
            <input
              name="firstName"
              placeholder="First Name *"
              className="p-3 border rounded-lg text-sm"
              onChange={handleInputChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              className="p-3 border rounded-lg text-sm"
              onChange={handleInputChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              className="p-3 border rounded-lg text-sm col-span-2"
              onChange={handleInputChange}
            />
            <input
              name="phone"
              placeholder="Phone Number (WhatsApp) *"
              className="p-3 border rounded-lg text-sm col-span-2"
              onChange={handleInputChange}
            />
            <input
              name="address"
              placeholder="Street Address *"
              className="p-3 border rounded-lg text-sm col-span-2"
              onChange={handleInputChange}
            />
            <input
              name="city"
              placeholder="City"
              className="p-3 border rounded-lg text-sm"
              onChange={handleInputChange}
            />
            <select
              name="province"
              className="p-3 border rounded-lg text-sm bg-white"
              onChange={handleInputChange}
            >
              <option value="">Select Province</option>
              <option value="Gauteng">Gauteng</option>
              <option value="Western Cape">Western Cape</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              {/* Add other SA provinces */}
            </select>
            <div className="col-span-2 border-t pt-4 mt-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                Vehicle Verification (Optional)
              </label>
              <input
                name="vinNumber"
                placeholder="Enter VIN Number for fitment guarantee"
                className="w-full p-3 border border-blue-200 rounded-lg text-sm mt-2 bg-blue-50/30"
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div className="w-full lg:w-[380px]">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-4">
          <h3 className="text-lg font-bold mb-4 border-b pb-2">
            Order Summary
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>R{cart.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span
                className={
                  cart.shippingFee === 0 ? 'text-green-600 font-bold' : ''
                }
              >
                {cart.shippingFee === 0
                  ? 'FREE'
                  : `R${cart.shippingFee.toFixed(2)}`}
              </span>
            </div>
            <div className="pt-4 border-t flex justify-between items-end">
              <div>
                <p className="text-xl font-black text-blue-900">
                  R{cart.totalAmount.toFixed(2)}
                </p>
                <p className="text-[10px] text-gray-400 mt-1">INCL. 15% VAT</p>
              </div>
            </div>
          </div>

          <Button
            disabled={!isAllowToCheckout || cart.totalQuantity === 0}
            onClick={handlePlaceOrder}
            isLoading={createOrderApi.isLoading}
            className={`w-full mt-6 py-4 rounded-lg font-black uppercase tracking-widest transition-all ${
              isAllowToCheckout && cart.totalQuantity > 0
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Place Order
          </Button>

          {!isAllowToCheckout && cart.totalQuantity > 0 && !user?._id && (
            <p className="text-[10px] text-red-500 mt-2 text-center">
              Please complete all required (*) fields
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shipping;
