import { ProductListApiQuery, ProductListType } from '@/types/product.types';
import { apiSlice } from './index';

/** 
 * 1. Define strict interfaces for your API 
 */
interface ProductsResponse {
  success: boolean;
  data: {
    products: ProductListType[];
    totals: number;
    exitsLength: number;
  };
}

/** 
 * Type for the raw response from your backend 
 * before it gets converted by transformResponse 
 */
interface RawBackendResponse {
  success: boolean;
  data: ProductListType[];
  count: number;
}

export const productApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    
    /**
     * getProducts: Used for the Shop Page.
     * Generates useGetProductsQuery (auto-fetch) and useLazyGetProductsQuery (manual).
     */
    getProducts: builder.query<ProductsResponse, { query: ProductListApiQuery }>({
      query: (arg: { query: ProductListApiQuery }) => ({
        url: `/api/products`,
        method: 'POST',
        body: arg,
      }),
      // Use transformResponse to map backend keys (e.g., 'count') to your UI keys (e.g., 'totals')
      transformResponse: (response: RawBackendResponse): ProductsResponse => ({
        success: response.success,
        data: {
          products: response.data || [],
          totals: response.count || 0,
          exitsLength: response.count || 0,
        },
      }),
    }),

    /**
     * getProductsMutation: Use if you specifically need a manual trigger 
     * that behaves like a POST action (though LazyQuery is usually preferred).
     */
    getProductsMutation: builder.mutation<ProductsResponse, { query: ProductListApiQuery }>({
      query: (arg: { query: ProductListApiQuery }) => ({
        url: `/api/products`,
        method: 'POST',
        body: arg,
      }),
    }),

    getSponsorItem: builder.query<any, void>({
      query: () => '/api/sponsor-items',
    }),

    getProductDetails: builder.query<any, string>({
      query: (id: string) => `/api/products/${id}`,
    }),
  }),
});

/** 
 * 2. Export hooks. 
 * RTK Query automatically generates these based on the endpoint names.
 */
export const { 
  useGetProductsQuery,         // Automatically fetches on component mount
  useLazyGetProductsQuery,     // Trigger manually (e.g., for home page load)
  useGetProductsMutationMutation, // For manual POST actions
  useGetSponsorItemQuery,    
  useGetProductDetailsQuery     
} = productApi;
