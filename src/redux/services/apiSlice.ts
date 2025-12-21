// src/redux/services/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  // baseUrl: '/' ensures it hits your Next.js /api/products route
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), 
  endpoints: () => ({}), // Start with empty endpoints
});
