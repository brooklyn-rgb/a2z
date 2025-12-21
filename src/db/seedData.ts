import { ProductSectionName, ProductStatus, ProductTypes } from '@/types/product.types';

export const autoBodyPartsSeed: Partial<ProductTypes>[] = [
  {
    status: ProductStatus.Approved,
    title: 'BMW 3 Series Front Bumper (G20)',
    category: 'Body Parts',
    brand: 'BMW', // Custom field added to your interface previously
    productSectionName: ProductSectionName.FeaturedProducts,
    sellerId: 'admin_a2z',
    ratings: { star: 4.8, totalReviews: 42 },
    totalQuestion: 5,
    price: 12999,
    discountPrice: 11499,
    discountPercent: 12,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg: 'a2zautobodyparts.co.za',
        cardImg: 'a2zautobodyparts.co.za',
        displayImg: 'a2zautobodyparts.co.za',
        commentImg: '',
        smallImg: '',
        publicId: 'bmw_f_bumper_001'
      }
    ],
    description: 'OEM-spec front bumper for BMW 3 Series (G20) 2019-2023. Perfect fitment with factory mounting points.',
    tags: ['BMW', 'G20', 'Bumper', 'M-Sport']
  },
  {
    status: ProductStatus.Approved,
    title: 'Audi A4 LED Headlight Assembly',
    category: 'Lighting',
    brand: 'Audi',
    productSectionName: ProductSectionName.NewArrivals,
    sellerId: 'admin_a2z',
    ratings: { star: 4.7, totalReviews: 28 },
    totalQuestion: 3,
    price: 8999,
    discountPrice: 7999,
    discountPercent: 11,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg: 'a2zautobodyparts.co.za',
        cardImg: 'a2zautobodyparts.co.za',
        displayImg: 'a2zautobodyparts.co.za',
        commentImg: '',
        smallImg: '',
        publicId: 'audi_headlight_001'
      }
    ],
    description: 'Complete LED headlight assembly for Audi A4 B9. Includes all mounting brackets.',
    tags: ['Audi', 'B9', 'Headlight', 'LED']
  },
  {
    status: ProductStatus.Approved,
    title: 'Mercedes C-Class Front Door Panel',
    category: 'Body Parts',
    brand: 'Mercedes-Benz',
    productSectionName: ProductSectionName.JustForYou,
    sellerId: 'admin_a2z',
    ratings: { star: 4.6, totalReviews: 35 },
    totalQuestion: 2,
    price: 7499,
    discountPrice: 6799,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg: 'a2zautobodyparts.co.za',
        cardImg: 'a2zautobodyparts.co.za',
        displayImg: 'a2zautobodyparts.co.za',
        commentImg: '',
        smallImg: '',
        publicId: 'merc_door_001'
      }
    ],
    description: 'Complete front door panel assembly for Mercedes C-Class W205.',
    tags: ['Mercedes', 'W205', 'Door', 'Panel']
  },
  {
    status: ProductStatus.Approved,
    title: 'Porsche 911 Rear Bumper',
    category: 'Body Parts',
    brand: 'Porsche',
    productSectionName: ProductSectionName.FeaturedProducts,
    sellerId: 'admin_a2z',
    ratings: { star: 4.9, totalReviews: 19 },
    totalQuestion: 8,
    price: 15999,
    discountPrice: 14499,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg: 'a2zautobodyparts.co.za',
        cardImg: 'a2zautobodyparts.co.co.za',
        displayImg: 'a2zautobodyparts.co.za',
        commentImg: '',
        smallImg: '',
        publicId: 'porsche_bumper_001'
      }
    ],
    description: 'Genuine-style rear bumper for Porsche 911 (992). Primed and ready for paint.',
    tags: ['Porsche', '992', 'Bumper', 'Rear']
  },
  {
    status: ProductStatus.Approved,
    title: 'BMW X5 Front Fender',
    category: 'Body Parts',
    brand: 'BMW',
    productSectionName: ProductSectionName.JustForYou,
    sellerId: 'admin_a2z',
    ratings: { star: 4.5, totalReviews: 31 },
    totalQuestion: 1,
    price: 6499,
    discountPrice: 5899,
    discountPercent: 9,
    inStock: true,
    images: [
      {
        isDefault: true,
        defaultImg: 'a2zautobodyparts.co.za',
        cardImg: 'a2zautobodyparts.co.za',
        displayImg: 'a2zautobodyparts.co.za',
        commentImg: '',
        smallImg: '',
        publicId: 'bmw_x5_fender'
      }
    ],
    description: 'Front fender for BMW X5 G05. OEM-quality steel construction.',
    tags: ['BMW', 'X5', 'Fender', 'Steel']
  }
];
