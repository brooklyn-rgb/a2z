import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  // ADD THIS LINE:
  tagTypes: ['Product'],
  endpoints: () => ({}),
});
