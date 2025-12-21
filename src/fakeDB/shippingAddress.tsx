interface CityProps {
  id: number;
  name: string;
}

interface DistrictProps {
  id: number;
  name: string;
  cities: CityProps[];
}

export interface ShippingAddressData {
  id: number;
  name: string;
  districts: DistrictProps[];
}

export default [
  {
    id: 1,
    name: 'Gauteng',
    districts: [
      {
        id: 101,
        name: 'City of Johannesburg',
        cities: [
          { id: 8001, name: 'Sandton' },
          { id: 8002, name: 'Randburg' },
          { id: 8003, name: 'Soweto' },
          { id: 8004, name: 'Midrand' },
          { id: 8005, name: 'Rosebank' },
        ],
      },
      {
        id: 102,
        name: 'City of Tshwane',
        cities: [
          { id: 9001, name: 'Pretoria Central' },
          { id: 9002, name: 'Centurion' },
          { id: 9003, name: 'Akasia' },
          { id: 9004, name: 'Silverton' },
          { id: 9005, name: 'Soshanguve' },
        ],
      },
      {
        id: 103,
        name: 'City of Ekurhuleni',
        cities: [
          { id: 10001, name: 'Kempton Park' },
          { id: 10002, name: 'Boksburg' },
          { id: 10003, name: 'Benoni' },
          { id: 10004, name: 'Edenvale' },
          { id: 10005, name: 'Germiston' },
        ],
      },
      {
        id: 104,
        name: 'Sedibeng',
        cities: [
          { id: 11001, name: 'Vereeniging' },
          { id: 11002, name: 'Vanderbijlpark' },
          { id: 11003, name: 'Meyerton' },
        ],
      },
      {
        id: 105,
        name: 'West Rand',
        cities: [
          { id: 12001, name: 'Krugersdorp' },
          { id: 12002, name: 'Randfontein' },
          { id: 12003, name: 'Carletonville' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Western Cape',
    districts: [
      {
        id: 201,
        name: 'City of Cape Town',
        cities: [
          { id: 15001, name: 'Cape Town CBD' },
          { id: 15002, name: 'Bellville' },
          { id: 15003, name: 'Somerset West' },
          { id: 15004, name: 'Milnerton' },
          { id: 15005, name: 'Wynberg' },
        ],
      },
      {
        id: 202,
        name: 'Cape Winelands',
        cities: [
          { id: 16001, name: 'Stellenbosch' },
          { id: 16002, name: 'Paarl' },
          { id: 16003, name: 'Worcester' },
          { id: 16004, name: 'Wellington' },
          { id: 16005, name: 'Franschhoek' },
        ],
      },
      {
        id: 203,
        name: 'Garden Route',
        cities: [
          { id: 17001, name: 'George' },
          { id: 17002, name: 'Knysna' },
          { id: 17003, name: 'Mossel Bay' },
          { id: 17004, name: 'Plettenberg Bay' },
          { id: 17005, name: 'Oudtshoorn' },
        ],
      },
      {
        id: 204,
        name: 'West Coast',
        cities: [
          { id: 18001, name: 'Vredenburg' },
          { id: 18002, name: 'Saldanha' },
          { id: 18003, name: 'Langebaan' },
          { id: 18004, name: 'Malmesbury' },
        ],
      },
      {
        id: 205,
        name: 'Overberg',
        cities: [
          { id: 19001, name: 'Hermanus' },
          { id: 19002, name: 'Swellendam' },
          { id: 19003, name: 'Caledon' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'KwaZulu-Natal',
    districts: [
      {
        id: 301,
        name: 'eThekwini',
        cities: [
          { id: 20001, name: 'Durban Central' },
          { id: 20002, name: 'Umhlanga' },
          { id: 20003, name: 'Pinetown' },
          { id: 20004, name: 'Chatsworth' },
          { id: 20005, name: 'Amanzimtoti' },
        ],
      },
      {
        id: 302,
        name: 'uMgungundlovu',
        cities: [
          { id: 21001, name: 'Pietermaritzburg' },
          { id: 21002, name: 'Howick' },
          { id: 21003, name: 'Hilton' },
        ],
      },
    ],
  },
];
