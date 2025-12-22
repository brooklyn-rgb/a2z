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

const autoBodyParts: AutoBodyPartData[] = [
  {
    _id: '1',
    images: {
      cardSizeUrl: '/images/bmw/bmw-bumper.png',
      displayUrl: '/images/bmw/bmw-bumper.png',
      commentUrl: '',
      defaultUrl: '/images/bmw/bmw-bumper.png',
    },
    title: 'BMW 3 Series Front Bumper',
    description:
      'OEM-spec front bumper for BMW 3 Series (G20) 2019-2023. Perfect fitment with factory mounting points.',
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
    warranty: '12 Months Fitment Guarantee',
  },
  {
    _id: '2',
    images: {
      cardSizeUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight-300x300.jpg',
      displayUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight.jpg',
      commentUrl: '',
      defaultUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-A4-Headlight.jpg',
    },
    title: 'Audi A4 LED Headlight Assembly',
    description:
      'Complete LED headlight assembly for Audi A4 B9. Includes all mounting brackets and connectors.',
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
    warranty: '24 Months',
  },
  {
    _id: '3',
    images: {
      cardSizeUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door-300x300.jpg',
      displayUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door.jpg',
      commentUrl: '',
      defaultUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Mercedes-C-Class-Door.jpg',
    },
    title: 'Mercedes C-Class Front Door Panel',
    description:
      'Complete front door panel assembly for Mercedes C-Class W205. Includes door card and mounting hardware.',
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
    warranty: '12 Months',
  },
  {
    _id: '4',
    images: {
      cardSizeUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper-300x300.jpg',
      displayUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper.jpg',
      commentUrl: '',
      defaultUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Porsche-911-Rear-Bumper.jpg',
    },
    title: 'Porsche 911 Rear Bumper',
    description:
      'Genuine-style rear bumper for Porsche 911 (992). Primed and ready for paint.',
    brand: 'Porsche',
    vehicleModel: '911 992',
    partNumber: 'P911-991511051',
    price: 15999,
    discountPrice: 14499,
    reviews: {
      totalReviews: 19,
      star: 4.9,
    },
    compatibility: [
      'Porsche 911 Carrera',
      'Porsche 911 Carrera S',
      'Porsche 992 Generation',
    ],
    stockStatus: 'In Stock',
    warranty: '18 Months',
  },
  {
    _id: '5',
    images: {
      cardSizeUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender-300x300.jpg',
      displayUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender.jpg',
      commentUrl: '',
      defaultUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/BMW-X5-Fender.jpg',
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
    compatibility: [
      'BMW X5 xDrive40i',
      'BMW X5 M50i',
      'BMW X5 G05 (2019-2023)',
    ],
    stockStatus: 'In Stock',
    warranty: '12 Months',
  },
  {
    _id: '6',
    images: {
      cardSizeUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror-300x300.jpg',
      displayUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror.jpg',
      commentUrl: '',
      defaultUrl:
        'https://a2zautobodyparts.co.za/wp-content/uploads/2024/05/Audi-Q7-Mirror.jpg',
    },
    title: 'Audi Q7 Side Mirror Assembly',
    description:
      'Complete electric side mirror with heating and indicator for Audi Q7.',
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
    warranty: '12 Months',
  },
  {
    _id: '7',
    images: {
      cardSizeUrl: '/images/benz/204-bonnet.jpg',
      displayUrl: '/images/benz/204-bonnet.jpg',
      commentUrl: '',
      defaultUrl: '/images/benz/204-bonnet.jpg',
    },
    title: 'Mercedes GLC Bonnet',
    description:
      'Complete bonnet assembly for Mercedes GLC X253. Aluminum construction.',
    brand: 'Mercedes-Benz',
    vehicleModel: 'GLC X253',
    partNumber: 'MB-A2538800100',
    price: 11999,
    discountPrice: 10999,
    reviews: {
      totalReviews: 26,
      star: 4.7,
    },
    compatibility: [
      'Mercedes GLC 300',
      'Mercedes GLC 43 AMG',
      'Mercedes GLC Coupe',
    ],
    stockStatus: 'In Stock',
    warranty: '12 Months',
  },
]; // <-- Array closing bracket

export default autoBodyParts;
