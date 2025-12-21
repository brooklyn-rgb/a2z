import CartQuantityButtons from '@/components/common/CartQuantityButtons';
import {
  CartData,
  addToCart,
  decreaseCartItems,
  removeItem,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';

const ItemContainer = () => {
  const { cartItems } = useAppSelector(state => state.cartSlice);
  
  // 1. ADD THIS STATE
  const [mounted, setMounted] = useState(false);

  // 2. ADD THIS EFFECT
  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. ADD THIS CHECK
  // While rendering on server, we show a skeleton or the empty state to match server HTML
  if (!mounted) {
    return (
      <div className="w-full max-w-[100%] lg:max-w-[68%] bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 opacity-0">
         {/* We return an invisible version or null to prevent text mismatch */}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[100%] lg:max-w-[68%] bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
      {/* ... rest of your code stays exactly the same ... */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-lg mr-3">
            <FaCar className="text-blue-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Your Auto Parts Cart</h1>
        </div>
        <div className="text-sm text-gray-500">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </div>
      </div>
      {/* ... the rest of your existing JSX ... */}
    </div>
  );
};


export default ItemContainer;

const ItemsList = ({ data }: { data: CartData[] }) => {
  return (
    <div className="w-full max-h-[100vh] h-full pb-4">
      {data?.map(item => <Item data={item} key={item.productId} />)}
    </div>
  );
};

const Item = ({ data }: { data: CartData }) => {
  const { cartItems } = useAppSelector(state => state.cartSlice);
  const [countItem, setCountItem] = useState<number>(1);
  const dispatch = useAppDispatch();

  const increment = () => {
    setCountItem(prev => prev + 1);
    const quantity = 1;
    dispatch(addToCart({ data, quantity }));
  };

  const decrement = () => {
    if (countItem > 1) {
      setCountItem(prev => prev - 1);
      const quantity = 1;
      dispatch(decreaseCartItems({ data, quantity }));
    }
  };

  useEffect(() => {
    setCountItem(data.cartQuantity);
  }, [data, cartItems, data.cartQuantity]);

  const itemPrice = data.discountPrice > 0 ? data.discountPrice : data.price;
  const totalPrice = (Number(itemPrice) * Number(data.cartQuantity)).toFixed(2);

  // Brand badge based on product data
  const getBrandBadge = () => {
    const title = data.title?.toLowerCase() || '';
    if (title.includes('bmw')) return 'bg-blue-100 text-blue-800';
    if (title.includes('audi')) return 'bg-red-100 text-red-800';
    if (title.includes('mercedes')) return 'bg-gray-100 text-gray-800';
    if (title.includes('porsche')) return 'bg-black text-white';
    return 'bg-gray-100 text-gray-800';
  };

  const getBrandName = () => {
    const title = data.title?.toLowerCase() || '';
    if (title.includes('bmw')) return 'BMW';
    if (title.includes('audi')) return 'Audi';
    if (title.includes('mercedes')) return 'Mercedes';
    if (title.includes('porsche')) return 'Porsche';
    return 'Auto Part';
  };

  return (
    <div className="w-full flex flex-row items-center relative border-b border-gray-100 pb-4 mb-4 hover:bg-gray-50 rounded-lg p-3 transition-colors">
      {/* Image container */}
      <Link href={`/product/${data.productId}`}>
        <div className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] overflow-hidden relative rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            fill
            className="w-full h-full cursor-pointer hover:scale-110 duration-200 object-contain p-2"
            src={data.imgUrl}
            alt={data.title || "Auto body part"}
          />
          {/* Brand badge overlay */}
          <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded ${getBrandBadge()}`}>
            {getBrandName()}
          </div>
        </div>
      </Link>

      {/* Info container */}
      <div className="flex-1 pl-4 md:pl-6">
        <div className="mb-3">
          <Link href={`/product/${data.productId}`}>
            <h2 className="font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
              {data.title}
            </h2>
          </Link>

          {/* Price display */}
          <div className="flex items-center flex-wrap gap-2 mt-2">
            <span className="text-lg font-bold text-gray-900">
              R{itemPrice}
            </span>
            
            {data.discountPrice > 0 && (
              <div className="flex items-center gap-2">
                <del className="text-sm text-gray-500">R{data.price}</del>
                <span className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded font-medium">
                  Save {data.discountPercent}%
                </span>
              </div>
            )}
          </div>

          {/* Total price */}
          <div className="mt-3 flex items-center justify-between">
            <div className="text-gray-700">
              <span className="font-medium">Subtotal:</span>
              <span className="font-bold text-lg ml-2">R{totalPrice}</span>
            </div>
            
            {/* Quantity buttons */}
            <div className="flex items-center space-x-4">
              <CartQuantityButtons
                increment={increment}
                decrement={decrement}
                quantity={data.cartQuantity}
              />
            </div>
          </div>
        </div>

        {/* Part details */}
        <div className="text-xs text-gray-500 mt-2">
          <div className="inline-flex items-center bg-gray-100 px-2 py-1 rounded mr-2">
            <span className="font-medium">Qty: {data.cartQuantity}</span>
          </div>
          <span className="text-gray-400">|</span>
          <span className="ml-2">Each: R{itemPrice}</span>
        </div>
      </div>

      {/* Remove button */}
      <button
        onClick={() => dispatch(removeItem({ id: data.productId }))}
        className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors group"
        aria-label="Remove item"
      >
        <RiDeleteBinLine className="h-5 w-5 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-8 right-0 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Remove
        </span>
      </button>
    </div>
  );
};