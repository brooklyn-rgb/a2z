// src/db/models/types.ts
export interface AutoBodyPartData {
  _id?: string; // Optional because MongoDB will generate one if not provided
  images: {
    cardSizeUrl: string;
    displayUrl: string;
    commentUrl: string;
    defaultUrl: string;
  };
  title: string;
  description: string;
  brand: string;
  vehicleModel: string;
  partNumber: string;
  price: number;
  discountPrice: number;
  reviews: {
    totalReviews: number;
    star: number;
  };
  compatibility: string[];
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  warranty: string;
}
