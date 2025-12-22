import {
  ProductListApiQuery,
  ProductTypes,
  SponsorItem,
} from '@/types/product.types';
import { apiSlice } from './index';

// Define proper interfaces
interface ProductsResponse {
  success: boolean;
  data: {
    products: ProductTypes[];
    totals: number;
    exitsLength: number;
  };
}

interface RawBackendResponse {
  success: boolean;
  data: ProductTypes[];
  count: number;
}

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getProducts: builder.query<
      ProductsResponse,
      { query: ProductListApiQuery }
    >({
      query: arg => ({
        url: `/api/products`,
        method: 'POST',
        body: arg,
      }),
      providesTags: result =>
        result
          ? [
              ...result.data.products.map(({ _id }) => ({
                type: 'Product' as const,
                id: _id,
              })),
              { type: 'Product', id: 'LIST' },
            ]
          : [{ type: 'Product', id: 'LIST' }],
      transformResponse: (response: RawBackendResponse): ProductsResponse => ({
        success: response.success,
        data: {
          products: response.data || [],
          totals: response.count || 0,
          exitsLength: response.count || 0,
        },
      }),
    }),

    getProductDetails: builder.query<ProductTypes, string>({
      query: id => `/api/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product' as const, id }],
    }),

    getSellerProduct: builder.query<ProductTypes, string>({
      query: id => `/api/seller/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product' as const, id }],
    }),

    getSellerProducts: builder.query<ProductTypes[], void>({
      query: () => '/api/seller/products',
      providesTags: result =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Product' as const,
                id: _id,
              })),
              { type: 'Product', id: 'LIST' },
            ]
          : [{ type: 'Product', id: 'LIST' }],
    }),

    createProduct: builder.mutation<ProductTypes, FormData>({
      query: body => ({
        url: '/api/seller/products',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),

    updateProduct: builder.mutation<
      ProductTypes,
      { id: string; data: FormData }
    >({
      query: ({ id, data }) => ({
        url: `/api/seller/products/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Product' as const, id },
        { type: 'Product', id: 'LIST' },
      ],
    }),

    deleteProduct: builder.mutation<void, string>({
      query: id => ({
        url: `/api/seller/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Product' as const, id },
        { type: 'Product', id: 'LIST' },
      ],
    }),

    getSponsorItem: builder.query<SponsorItem, void>({
      query: () => '/api/sponsor-items',
      providesTags: result =>
        result ? [{ type: 'Product' as const, id: 'SPONSOR' }] : [],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetSponsorItemQuery,
  useGetProductDetailsQuery,
  useGetSellerProductQuery,
  useGetSellerProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
