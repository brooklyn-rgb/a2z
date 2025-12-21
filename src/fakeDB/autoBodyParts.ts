export interface AutoBodyPartData {
  _id: string;
  images: {
    cardSizeUrl: string;
    displayUrl: string;
    commentUrl: string;
    defaultUrl: string;
  };
  title: string;
  description: string;
  brand: string; // Added brand field
  vehicleModel: string; // Added vehicle model compatibility
  partNumber: string; // Added part number
  price: number;
  discountPrice: number;
  reviews: {
    totalReviews: number;
    star: number;
  };
  compatibility: string[]; // Vehicle models this part fits
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  warranty: string;
}

const autoBodyParts: AutoBodyPartData[] = [
  {
    _id: '1',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-3-Series-Front-Bumper-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-3-Series-Front-Bumper.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-3-Series-Front-Bumper.jpg',
    },
    title: 'BMW 3 Series Front Bumper',
    description: 'OEM-spec front bumper for BMW 3 Series (G20) 2019-2023. Perfect fitment with factory mounting points.',
    brand: 'BMW',
    vehicleModel: '3 Series G20',
    partNumber: 'BMW-51112233344',
    price: 12999,
    discountPrice: 11499,
    reviews: {
      totalReviews: 42,
      star: 4.8,
    },
    compatibility: ['BMW 3 Series G20 (2019-2023)', 'BMW 330i', 'BMW M340i'],
    stockStatus: 'In Stock',
    warranty: '12 Months Fitment Guarantee'
  },
  {
    _id: '2',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight.jpg',
    },
    title: 'Audi A4 LED Headlight Assembly',
    description: 'Complete LED headlight assembly for Audi A4 B9. Includes all mounting brackets and connectors.',
    brand: 'Audi',
    vehicleModel: 'A4 B9',
    partNumber: 'AUD-8W0941005',
    price: 8999,
    discountPrice: 7999,
    reviews: {
      totalReviews: 28,
      star: 4.7,
    },
    compatibility: ['Audi A4 B9 (2016-2020)', 'Audi A5 Coupe', 'Audi S4'],
    stockStatus: 'In Stock',
    warranty: '24 Months'
  },
  {
    _id: '3',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door.jpg',
    },
    title: 'Mercedes C-Class Front Door Panel',
    description: 'Complete front door panel assembly for Mercedes C-Class W205. Includes door card and mounting hardware.',
    brand: 'Mercedes-Benz',
    vehicleModel: 'C-Class W205',
    partNumber: 'MB-A2057200300',
    price: 7499,
    discountPrice: 6799,
    reviews: {
      totalReviews: 35,
      star: 4.6,
    },
    compatibility: ['Mercedes C200', 'Mercedes C300', 'Mercedes C43 AMG'],
    stockStatus: 'Low Stock',
    warranty: '12 Months'
  },
  {
    _id: '4',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper.jpg',
    },
    title: 'Porsche 911 Rear Bumper',
    description: 'Genuine-style rear bumper for Porsche 911 (992). Primed and ready for paint.',
    brand: 'Porsche',
    vehicleModel: '911 992',
    partNumber: 'P911-991511051',
    price: 15999,
    discountPrice: 14499,
    reviews: {
      totalReviews: 19,
      star: 4.9,
    },
    compatibility: ['Porsche 911 Carrera', 'Porsche 911 Carrera S', 'Porsche 992 Generation'],
    stockStatus: 'In Stock',
    warranty: '18 Months'
  },
  {
    _id: '5',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender.jpg',
    },
    title: 'BMW X5 Front Fender',
    description: 'Front fender for BMW X5 G05. OEM-quality steel construction.',
    brand: 'BMW',
    vehicleModel: 'X5 G05',
    partNumber: 'BMW-51718087747',
    price: 6499,
    discountPrice: 5899,
    reviews: {
      totalReviews: 31,
      star: 4.5,
    },
    compatibility: ['BMW X5 xDrive40i', 'BMW X5 M50i', 'BMW X5 G05 (2019-2023)'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '6',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror.jpg',
    },
    title: 'Audi Q7 Side Mirror Assembly',
    description: 'Complete electric side mirror with heating and indicator for Audi Q7.',
    brand: 'Audi',
    vehicleModel: 'Q7',
    partNumber: 'AUD-4M1857521',
    price: 4299,
    discountPrice: 3899,
    reviews: {
      totalReviews: 22,
      star: 4.4,
    },
    compatibility: ['Audi Q7 4M', 'Audi SQ7', 'Audi Q7 2016-2020'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '7',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-GLC-Bonnet-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-GLC-Bonnet.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-GLC-Bonnet.jpg',
    },
    title: 'Mercedes GLC Bonnet',
    description: 'Complete bonnet assembly for Mercedes GLC X253. Aluminum construction.',
    brand: 'Mercedes-Benz',
    vehicleModel: 'GLC X253',
    partNumber: 'MB-A2538800100',
    price: 11999,
    discountPrice: 10999,
    reviews: {
      totalReviews: 26,
      star: 4.7,
    },
    compatibility: ['Mercedes GLC 300', 'Mercedes GLC 43 AMG', 'Mercedes GLC Coupe'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '8',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Cayenne-Grille-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Cayenne-Grille.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Cayenne-Grille.jpg',
    },
    title: 'Porsche Cayenne Front Grille',
    description: 'Front grille assembly for Porsche Cayenne E3. Includes Porsche crest.',
    brand: 'Porsche',
    vehicleModel: 'Cayenne E3',
    partNumber: 'PCA-95B6201010',
    price: 3999,
    discountPrice: 3599,
    reviews: {
      totalReviews: 17,
      star: 4.6,
    },
    compatibility: ['Porsche Cayenne S', 'Porsche Cayenne Turbo', 'Porsche Cayenne Coupe'],
    stockStatus: 'Low Stock',
    warranty: '12 Months'
  },
  {
    _id: '9',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-5-Series-Tail-Light-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-5-Series-Tail-Light.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-5-Series-Tail-Light.jpg',
    },
    title: 'BMW 5 Series LED Tail Light',
    description: 'LED tail light assembly for BMW 5 Series G30. Plug and play installation.',
    brand: 'BMW',
    vehicleModel: '5 Series G30',
    partNumber: 'BMW-63217363897',
    price: 5499,
    discountPrice: 4999,
    reviews: {
      totalReviews: 39,
      star: 4.8,
    },
    compatibility: ['BMW 530i', 'BMW 540i', 'BMW M550i', 'BMW 5 Series G30 2017-2023'],
    stockStatus: 'In Stock',
    warranty: '18 Months'
  },
  {
    _id: '10',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q5-Bumper-Trim-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q5-Bumper-Trim.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q5-Bumper-Trim.jpg',
    },
    title: 'Audi Q5 Bumper Lower Trim',
    description: 'Lower bumper trim and diffuser for Audi Q5 FY. Enhances sporty appearance.',
    brand: 'Audi',
    vehicleModel: 'Q5 FY',
    partNumber: 'AUD-8R0807641',
    price: 2299,
    discountPrice: 2099,
    reviews: {
      totalReviews: 24,
      star: 4.3,
    },
    compatibility: ['Audi Q5 2.0T', 'Audi SQ5', 'Audi Q5 Sportback'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '11',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-E-Class-Bumper-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-E-Class-Bumper.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-E-Class-Bumper.jpg',
    },
    title: 'Mercedes E-Class AMG Bumper',
    description: 'AMG Line front bumper for Mercedes E-Class W213. Aggressive styling.',
    brand: 'Mercedes-Benz',
    vehicleModel: 'E-Class W213',
    partNumber: 'MB-A2138801300',
    price: 13999,
    discountPrice: 12999,
    reviews: {
      totalReviews: 33,
      star: 4.9,
    },
    compatibility: ['Mercedes E300', 'Mercedes E400', 'Mercedes E53 AMG'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '12',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Macan-Spoiler-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Macan-Spoiler.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-Macan-Spoiler.jpg',
    },
    title: 'Porsche Macan Rear Spoiler',
    description: 'OEM-style rear spoiler for Porsche Macan. Carbon fiber look finish.',
    brand: 'Porsche',
    vehicleModel: 'Macan',
    partNumber: 'PCA-95B827910',
    price: 3299,
    discountPrice: 2999,
    reviews: {
      totalReviews: 21,
      star: 4.7,
    },
    compatibility: ['Porsche Macan S', 'Porsche Macan GTS', 'Porsche Macan Turbo'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '13',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-M3-Grille-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-M3-Grille.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-M3-Grille.jpg',
    },
    title: 'BMW M3 Kidney Grilles',
    description: 'Black kidney grille set for BMW M3/M4. Enhances sporty appearance.',
    brand: 'BMW',
    vehicleModel: 'M3 G80',
    partNumber: 'BMW-51138083707',
    price: 1899,
    discountPrice: 1699,
    reviews: {
      totalReviews: 47,
      star: 4.8,
    },
    compatibility: ['BMW M3 G80', 'BMW M4 G82', 'BMW M3 Competition'],
    stockStatus: 'In Stock',
    warranty: '24 Months'
  },
  {
    _id: '14',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A6-Fog-Light-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A6-Fog-Light.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A6-Fog-Light.jpg',
    },
    title: 'Audi A6 Fog Light Assembly',
    description: 'Complete fog light assembly for Audi A6 C8. Includes housing and bulb.',
    brand: 'Audi',
    vehicleModel: 'A6 C8',
    partNumber: 'AUD-4G0941699',
    price: 1799,
    discountPrice: 1599,
    reviews: {
      totalReviews: 19,
      star: 4.5,
    },
    compatibility: ['Audi A6 45 TFSI', 'Audi S6', 'Audi A6 Allroad'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '15',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-S-Class-Mirror-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-S-Class-Mirror.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-S-Class-Mirror.jpg',
    },
    title: 'Mercedes S-Class Electric Mirror',
    description: 'Power folding mirror with memory function for Mercedes S-Class W223.',
    brand: 'Mercedes-Benz',
    vehicleModel: 'S-Class W223',
    partNumber: 'MB-A2238202500',
    price: 6899,
    discountPrice: 6299,
    reviews: {
      totalReviews: 14,
      star: 4.9,
    },
    compatibility: ['Mercedes S500', 'Mercedes S580', 'Mercedes Maybach S-Class'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
  {
    _id: '16',
    images: {
      cardSizeUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-718-Bumper-300x300.jpg',
      displayUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-718-Bumper.jpg',
      commentUrl: '',
      defaultUrl: 'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-718-Bumper.jpg',
    },
    title: 'Porsche 718 Cayman Front Bumper',
    description: 'Front bumper cover for Porsche 718 Cayman. Primed for paint.',
    brand: 'Porsche',
    vehicleModel: '718 Cayman',
    partNumber: 'PCA-98250512101',
    price: 12499,
    discountPrice: 11499,
    reviews: {
      totalReviews: 12,
      star: 4.8,
    },
    compatibility: ['Porsche 718 Cayman', 'Porsche 718 Boxster', 'Porsche 718 GTS'],
    stockStatus: 'In Stock',
    warranty: '12 Months'
  },
];

export default autoBodyParts;