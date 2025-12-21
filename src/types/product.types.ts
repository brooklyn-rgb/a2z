export interface ProductRelated {
  product_id: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductImage {
  isDefault: boolean;
  defaultImg: string;
  cardImg: string;
  displayImg: string;
  commentImg: string;
  smallImg: string;
  publicId: string;
}

export interface ProductTypes {
  _id: string;
   brand: string; // <--- ADD THIS LINE
  status: ProductStatusType;
  title: string;
  category: string;
  productSectionName: ProductSectionNameType;
  sellerId: string;
  ratings: {
    star: number;
    totalReviews: number;
  };
  totalQuestion: number;

  price: number;
  discountPrice: number;
  discountPercent: number;

  offerText?: string;
  inStock: boolean;

  images: ProductImage[];

  description: string;
  specification?: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SellerProductList {
  _id: string;
  createdAt: Date;
  price: number;
  status: ProductStatusType;
  imgUrl: string;
  title: string;
}

export const ProductStatus = {
  Pending: 'Pending',
  Approved: 'Active',
  Testing: 'Testing',
  Rejected: 'Rejected',
} as const;

export type ProductStatusType =
  (typeof ProductStatus)[keyof typeof ProductStatus];

export const ProductSectionName = {
  NewArrivals: 'New Arrivals',
  FeaturedProducts: 'Featured Products',
  JustForYou: 'Just For You!',
} as const;

export type ProductSectionNameType =
  (typeof ProductSectionName)[keyof typeof ProductSectionName];

export enum ProductFilterBy {
  MostPopular = 'MostPopular',
  Regular = 'Regular',
}

export interface ProductListApiQuery {
  category?: string;
  brand?: string;             // <--- Add this line
  pageLength?: number;
  featured?: boolean; // Add this line  
  [key: string]: any; // Optional: Allow any other dynamic properties
  limit: number;
  discountPercentUpTo?: number;
  startPrice?: string;
  endPrice?: string;
  filterBy?: ProductFilterBy;
  productSectionName?: ProductSectionNameType;
}

export interface ProductListType {
  _id: string;
  title: string;
  imgUrl: string;
  price: number;
  discountPercent: number;
  discountPrice: number;
  offerText: string;
  inStock: boolean;
  category: string;
  ratings: {
    star: number;
    totalReviews: number;
  };
}

// src/types/product.types.ts

export interface ProductsResponse {
  success: boolean;
  message: string;
  // This is the missing piece
  products: ProductListType[]; 
  // If your API wraps it in a 'data' object, do this instead:
  // data: { products: ProductListType[] };
}
