import {
  ProductSectionName,
  ProductStatus,
  ProductTypes,
} from '@/types/product.types';

export const autoBodyPartsSeed: Partial<ProductTypes>[] = [
  {
    status: ProductStatus.Approved,
    title: 'BMW 3 Series Front Bumper (G20)',
    category: 'Body Parts',
    brand: 'BMW',
    productSectionName: ProductSectionName.FeaturedProducts,
    sellerId: 'admin_a2z',
    ratings: { star: 4.8, totalReviews: 42 },
    price: 12999,
    discountPrice: 11499,
    discountPercent: 12,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/1e40af/ffffff?text=BMW+Bumper',
        cardImg: 'https://placehold.co/300x225/1e40af/ffffff?text=BMW+Bumper',
        displayImg:
          'https://placehold.co/600x450/1e40af/ffffff?text=BMW+Bumper',
        commentImg:
          'https://placehold.co/200x150/1e40af/ffffff?text=BMW+Bumper',
        smallImg: 'https://placehold.co/100x75/1e40af/ffffff?text=BMW+Bumper',
        publicId: 'bmw_f_bumper_001',
      },
    ],
    description: 'OEM-spec front bumper for BMW 3 Series (G20) 2019-2023.',
    tags: ['BMW', 'G20', 'Bumper'],
  },
  {
    status: ProductStatus.Approved,
    title: 'Audi A4 LED Headlight Assembly',
    category: 'Lighting',
    brand: 'Audi',
    productSectionName: ProductSectionName.NewArrivals,
    sellerId: 'admin_a2z',
    ratings: { star: 4.7, totalReviews: 28 },
    price: 8999,
    discountPrice: 7999,
    discountPercent: 11,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/dc2626/ffffff?text=Audi+Headlight',
        cardImg:
          'https://placehold.co/300x225/dc2626/ffffff?text=Audi+Headlight',
        displayImg:
          'https://placehold.co/600x450/dc2626/ffffff?text=Audi+Headlight',
        commentImg:
          'https://placehold.co/200x150/dc2626/ffffff?text=Audi+Headlight',
        smallImg:
          'https://placehold.co/100x75/dc2626/ffffff?text=Audi+Headlight',
        publicId: 'audi_headlight_001',
      },
    ],
    description: 'Complete LED headlight assembly for Audi A4 B9.',
    tags: ['Audi', 'A4', 'Headlight', 'Lighting'],
  },
  {
    status: ProductStatus.Approved,
    title: 'Mercedes C-Class Front Door Panel',
    category: 'Body Parts',
    brand: 'Mercedes-Benz',
    productSectionName: ProductSectionName.JustForYou,
    sellerId: 'admin_a2z',
    ratings: { star: 4.6, totalReviews: 35 },
    price: 7499,
    discountPrice: 6799,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/4b5563/ffffff?text=Mercedes+Door',
        cardImg:
          'https://placehold.co/300x225/4b5563/ffffff?text=Mercedes+Door',
        displayImg:
          'https://placehold.co/600x450/4b5563/ffffff?text=Mercedes+Door',
        commentImg:
          'https://placehold.co/200x150/4b5563/ffffff?text=Mercedes+Door',
        smallImg:
          'https://placehold.co/100x75/4b5563/ffffff?text=Mercedes+Door',
        publicId: 'merc_door_001',
      },
    ],
    description: 'Complete front door panel for Mercedes C-Class W205.',
    tags: ['Mercedes', 'C-Class', 'Door', 'W205'],
  },
  {
    status: ProductStatus.Approved,
    title: 'Porsche 911 Rear Bumper',
    category: 'Body Parts',
    brand: 'Porsche',
    productSectionName: ProductSectionName.FeaturedProducts,
    sellerId: 'admin_a2z',
    ratings: { star: 4.9, totalReviews: 19 },
    price: 15999,
    discountPrice: 14499,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/000000/ffffff?text=Porsche+Bumper',
        cardImg:
          'https://placehold.co/300x225/000000/ffffff?text=Porsche+Bumper',
        displayImg:
          'https://placehold.co/600x450/000000/ffffff?text=Porsche+Bumper',
        commentImg:
          'https://placehold.co/200x150/000000/ffffff?text=Porsche+Bumper',
        smallImg:
          'https://placehold.co/100x75/000000/ffffff?text=Porsche+Bumper',
        publicId: 'porsche_bumper_001',
      },
    ],
    description: 'Genuine-style rear bumper for Porsche 911 (992).',
    tags: ['Porsche', '911', 'Bumper', '992'],
  },
  {
    status: ProductStatus.Approved,
    title: 'BMW X5 Front Fender - Left',
    category: 'Body Parts',
    brand: 'BMW',
    productSectionName: ProductSectionName.JustForYou,
    sellerId: 'admin_a2z',
    ratings: { star: 4.5, totalReviews: 31 },
    price: 6499,
    discountPrice: 5899,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/2563eb/ffffff?text=BMW+X5+Fender',
        cardImg:
          'https://placehold.co/300x225/2563eb/ffffff?text=BMW+X5+Fender',
        displayImg:
          'https://placehold.co/600x450/2563eb/ffffff?text=BMW+X5+Fender',
        commentImg:
          'https://placehold.co/200x150/2563eb/ffffff?text=BMW+X5+Fender',
        smallImg:
          'https://placehold.co/100x75/2563eb/ffffff?text=BMW+X5+Fender',
        publicId: 'bmw_x5_fender_L_01',
      },
    ],
    description: 'Left front fender for BMW X5 G05.',
    tags: ['BMW', 'X5', 'Fender', 'Left', 'G05'],
  },
  {
    status: ProductStatus.Approved,
    title: 'BMW X5 Front Fender - Right',
    category: 'Body Parts',
    brand: 'BMW',
    productSectionName: ProductSectionName.JustForYou,
    sellerId: 'admin_a2z',
    ratings: { star: 4.5, totalReviews: 31 },
    price: 6499,
    discountPrice: 5899,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/1d4ed8/ffffff?text=BMW+X5+Fender',
        cardImg:
          'https://placehold.co/300x225/1d4ed8/ffffff?text=BMW+X5+Fender',
        displayImg:
          'https://placehold.co/600x450/1d4ed8/ffffff?text=BMW+X5+Fender',
        commentImg:
          'https://placehold.co/200x150/1d4ed8/ffffff?text=BMW+X5+Fender',
        smallImg:
          'https://placehold.co/100x75/1d4ed8/ffffff?text=BMW+X5+Fender',
        publicId: 'bmw_x5_fender_R_02',
      },
    ],
    description: 'Right front fender for BMW X5 G05.',
    tags: ['BMW', 'X5', 'Fender', 'Right', 'G05'],
  },
  {
    status: ProductStatus.Approved,
    title: 'Audi Q5 Front Grille (Chrome)',
    category: 'Body Parts',
    brand: 'Audi',
    productSectionName: ProductSectionName.NewArrivals,
    sellerId: 'admin_a2z',
    ratings: { star: 4.8, totalReviews: 12 },
    price: 4500,
    discountPrice: 3900,
    discountPercent: 13,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg:
          'https://placehold.co/400x300/b91c1c/ffffff?text=Audi+Q5+Grille',
        cardImg:
          'https://placehold.co/300x225/b91c1c/ffffff?text=Audi+Q5+Grille',
        displayImg:
          'https://placehold.co/600x450/b91c1c/ffffff?text=Audi+Q5+Grille',
        commentImg:
          'https://placehold.co/200x150/b91c1c/ffffff?text=Audi+Q5+Grille',
        smallImg:
          'https://placehold.co/100x75/b91c1c/ffffff?text=Audi+Q5+Grille',
        publicId: 'audi_q5_grille_001',
      },
    ],
    description: 'Chrome finish front grille for Audi Q5.',
    tags: ['Audi', 'Q5', 'Grille', 'Chrome'],
  },
];
