'use client';

import { InputApiErrorMessage } from '@/components/common/FormikCustomInput';
import Input from '@/components/common/Input';
import shippingAddress from '@/fakeDB/shippingAddress';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useCreateShippingAddressMutation } from '@/redux/services/shippingAddressApi';
import { ShippingAddressCreateData } from '@/types/shippingAddress.types';
import { PATH_USER } from '@/utils/routes';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import PhoneInput, {
  isValidPhoneNumber,
  type Value,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Fix: Safely handle API errors from RTK Query without 'any'
const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === 'object' && 'data' in error) {
    const errorData = error.data as { message?: string };
    return errorData.message || 'An unknown error occurred';
  }
  return 'An unexpected error occurred';
};

const initialState: ShippingAddressCreateData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  division: '',
  district: '',
  thana: '',
  address: '',
};

type FieldName = keyof ShippingAddressCreateData;

const ShippingAddress = () => {
  const [createShippingAddress, createShippingAddressApi] =
    useCreateShippingAddressMutation();
  const user = useAppSelector(state => state.authSlice.user);
  const [state, setState] = useState<ShippingAddressCreateData>(initialState);
  const [error, setError] = useState<string>('');

  const [selectedDivisionLength, setSelectedDivisionLength] =
    useState<number>(0);
  const [selectedDistrictLength, setSelectedDistrictLength] =
    useState<number>(7);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const inputHandler = (value: string, fieldName: FieldName) => {
    switch (fieldName) {
      case 'phone':
        setState(prev => ({ ...prev, phone: value }));
        if (error) setError('');
        break;

      case 'division':
        const divIdx = shippingAddress.findIndex(addr => addr.name === value);
        if (divIdx >= 0) {
          setSelectedDivisionLength(divIdx);
          setSelectedDistrictLength(0);
          setState(prev => ({
            ...prev,
            division: shippingAddress[divIdx].name,
            district: shippingAddress[divIdx].districts[0].name,
          }));
        }
        break;

      case 'district':
        // Fix: Use selectedDivisionLength to avoid "unused variable" error
        const distIdx = shippingAddress[
          selectedDivisionLength
        ].districts.findIndex(addr => addr.name === value);
        if (distIdx >= 0) {
          setSelectedDistrictLength(distIdx);
          setState(prev => ({
            ...prev,
            district:
              shippingAddress[selectedDivisionLength].districts[distIdx].name,
            thana:
              shippingAddress[selectedDivisionLength].districts[distIdx]
                .cities[0].name,
          }));
        }
        break;

      case 'thana':
        // Fix: Use selectedDivisionLength and selectedDistrictLength
        const thanaIdx = shippingAddress[selectedDivisionLength].districts[
          selectedDistrictLength
        ].cities.findIndex(addr => addr.name === value);
        if (thanaIdx >= 0) {
          setState(prev => ({
            ...prev,
            thana:
              shippingAddress[selectedDivisionLength].districts[
                selectedDistrictLength
              ].cities[thanaIdx].name,
          }));
        }
        break;

      default:
        setState(prev => ({ ...prev, [fieldName]: value }));
        break;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!state.phone || !isValidPhoneNumber(state.phone)) {
      return setError('Invalid phone number');
    }
    createShippingAddress({ shippingAddress: state });
    setError('');
  };

  useEffect(() => {
    if (user?._id) {
      setState(prev => ({
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
      }));
    }
  }, [user]);

  useEffect(() => {
    if (createShippingAddressApi.isSuccess) {
      setState(initialState);
      dispatch(
        showAlert({
          message: 'Shipping Address created',
          type: AlertType.Success,
        })
      );
      router.replace(redirect?.trim() ? redirect : PATH_USER.shippingAddress);
    }
  }, [createShippingAddressApi.isSuccess, router, dispatch, redirect]);

  return (
    <div className="w-full h-full p-1 md:p-5 bg-white mt-3 md:mt-10 rounded-[6px]">
      <form onSubmit={onSubmit} className="w-full">
        {error && InputApiErrorMessage(error)}

        {/* Fixed API Error Logic */}
        {createShippingAddressApi.isError &&
          InputApiErrorMessage(getErrorMessage(createShippingAddressApi.error))}

        <div className="flex items-center justify-between">
          <div className="w-[48%]">
            <Input
              containerClassName="w-full"
              name="firstName"
              placeholder="First Name"
              value={state.firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputHandler(e.target.value, 'firstName')
              }
            />
          </div>
          <div className="w-[48%]">
            <Input
              containerClassName="w-full"
              name="lastName"
              placeholder="Last Name"
              value={state.lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                inputHandler(e.target.value, 'lastName')
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-[30px]">
          <div className="w-[48%]">
            <PhoneInput
              international
              defaultCountry="BD"
              placeholder="Phone number"
              className="w-full h-[47px] text-sm bg-gray-50 rounded-[8px] border border-gray-300 px-2"
              // Fix: Cast to Value | undefined for library compatibility
              value={state.phone as Value | undefined}
              onChange={value => {
                const phoneValue = value || '';
                inputHandler(phoneValue, 'phone');
                if (phoneValue && !/^\+[0-9]{1,15}$/.test(phoneValue)) {
                  setError('Invalid phone number');
                } else if (error === 'Invalid phone number') {
                  setError('');
                }
              }}
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="bg-primary text-white px-10 py-3 rounded-md"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
