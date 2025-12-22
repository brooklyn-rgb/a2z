'use client';

import Button from '@/components/common/Button';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'; // Added useSearchParams
import { FC, useEffect } from 'react';
import * as Yup from 'yup';

interface IProps {
  activeNewUserHandler: () => void;
}
interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6),
});

const Login: FC<IProps> = ({ activeNewUserHandler }) => {
  const [loginQuery, { data, error, isLoading, isError }] = useLoginMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  // Get the redirect path from URL (e.g., /auth?redirect=/cart/checkout)
  const redirectTo = searchParams.get('redirect') || '/';

  const handleSubmit = (values: FormValues) => loginQuery(values);

  useEffect(() => {
    if (data?.success && data?.data?.accessToken) {
      // 1. Save credentials to Redux
      dispatch(
        setCredentials({
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        })
      );

      // 2. Perform the redirect
      router.push(redirectTo);
    }
  }, [data, dispatch, router, redirectTo]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="w-full mt-[40px] max-w-[320px] mx-auto">
        {/* @ts-ignore */}
        {isError &&
          InputApiErrorMessage(error?.data?.message || 'Login failed')}

        <div className="w-full flex flex-col justify-center items-center">
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"
            containerStyle={{ marginBottom: '16px' }}
            component={CustomFormikInput}
          />

          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            component={CustomFormikInput}
          />
        </div>

        <div className="flex justify-end w-full mt-2">
          <Link
            href="/auth/forgot-password"
            className="text-[12px] text-gray-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          disabled={isLoading}
          isLoading={isLoading}
          type="submit"
          className="shadow-lg active:scale-95 duration-150 flex justify-center items-center w-full mt-4 bg-blue-900 h-[42px] rounded-[6px] text-white text-[13px] font-semibold"
        >
          Sign In
        </Button>

        <div className="mt-6 text-[12px] text-gray-400 flex flex-col items-center gap-1">
          <p>New to A2z AutoBody Parts?</p>
          <button
            type="button"
            onClick={activeNewUserHandler}
            className="text-blue-600 font-bold hover:underline cursor-pointer"
          >
            Create an Account
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
