import { ReviewCreate, ReviewData } from '@/types/review.type';
import { apiSlice } from '.';

export const reviewApi = apiSlice.injectEndpoints({
  overrideExisting: true, // Recommended for Next.js Hot Module Replacement
  endpoints: (builder) => ({
    
    // 1. FIXED: Removed 'arg' and simplified body handling
    createReview: builder.mutation<
      { data: ReviewData; success: boolean },
      ReviewCreate
    >({
      query: (credential) => ({
        url: '/review/create',
        method: 'POST',
        // In a POST request, 'credential' contains the review data
        body: credential,
      }),
    }),

    // 2. FIXED: Case-consistency for method
    getAllReviewByProductId: builder.query<
      { data: { totals: number; reviews: ReviewData[] }; success: boolean },
      { productId: string }
    >({
      query: (credential) => ({
        url: `/review/list-by-productId/${credential.productId}`,
        method: 'GET',
      }),
    }),

    getUserAllReviews: builder.query<
      { data: { totals: number; reviews: ReviewData[] }; success: boolean },
      void
    >({
      query: () => ({
        url: `/review/get-user-all-reviews`,
        method: 'GET',
      }),
    }),

    deleteReview: builder.mutation<
      { data: { totals: number; reviews: ReviewData }; success: boolean },
      { reviewId: string }
    >({
      query: (credential) => ({
        url: `/review/delete/${credential.reviewId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewByProductIdQuery,
  useGetUserAllReviewsQuery,
  useDeleteReviewMutation,
} = reviewApi;
