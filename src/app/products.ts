export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number,
  images: string[],
  link: string,
  currentImageIndex: number,
}

export const products = [
  {
    id: 1,
    name: 'NOW Vitamin D3',
    price: 4890,
    description: 'Полезный витамин',
    rating: 4.2,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h1f/hce/69165915701278.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h69/hb5/69165917929502.jpg?format=gallery-large', 'https://whey.kz/wp-content/uploads/2020/07/VitDpromo.jpg'],
    link: 'https://kaspi.kz/shop/p/now-vitamin-d-3-5000-iu-kapsuly-120-sht-108959948/?c=750000000',
    currentImageIndex: 0,
  },
  {
    id: 2,
    name: '21st Century минерал',
    price: 3548,
    description: 'Полезные минералы',
    rating: 5.0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h7b/h32/64006498877470.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h87/h47/64006501367838.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h77/h57/64006504841246.jpg?format=gallery-large'],
    currentImageIndex: 0,
    link: 'https://kaspi.kz/shop/p/21st-century-mineral-calcium-magnesium-zinc-d3-90-tabletok-100505310/?c=750000000',
  },
  {
    id: 3,
    currentImageIndex: 0,
    name: 'California Gold Nutrition Омега 3',
    price: 3788,
    description: 'Назначение: для улучшения состояния кожи',
    rating: 5.0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h0f/hd1/63863964336158.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h78/63863967154206.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h01/h68/63863970431006.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/california-gold-nutrition-omega-3-100-kapsul-omega-3-premium-fish-oil-100638544/?c=750000000',
  },
  {
    id: 4,
    currentImageIndex: 0,
    name: 'Жидкий йод плюс раствор 59 мл',
    price: 4569,
    description: 'Тип: минерально-витаминный комплекс',
    rating: 4.9,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h34/hf4/64030324490270.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h18/64030326456350.jpg?format=gallery-large', 'https://frankfurt.apollo.olxcdn.com/v1/files/yjine2323ui7-UZ/image;s=1080x1440'],
    link: 'https://kaspi.kz/shop/p/zhidkii-iod-pljus-rastvor-59-ml-101135465/?c=750000000',
  },
  {
    id: 5,
    currentImageIndex: 0,
    name: 'Gold C Vitamin',
    price: 2900,
    description: 'Страна производитель: США',
    rating: 3.5,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h44/h81/84638793465886.png?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/he8/h73/84638793498654.png?format=gallery-large', 'https://frankfurt.apollo.olxcdn.com/v1/files/yjine2323ui7-UZ/image;s=1080x1440'],
    link: 'https://kaspi.kz/shop/p/california-gold-nutrition-vitamin-gold-c-vitamin-c-1000-mg-60-kapsul-100569146/?c=750000000',
  },
  {
    id: 6,
    currentImageIndex: 0,
    name: 'Nutraxin Collagen 30',
    price: 3599,
    description: 'Регистрационный статус: не является лекарственным средством',
    rating: 2.2,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd9/h76/64950049374238.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h30/64950051635230.jpg?format=gallery-large', 'https://images.satu.kz/181573086_w640_h640_kollagen-nutraksin-dlya.jpg'],
    link: 'https://kaspi.kz/shop/p/nutraxin-bad-nutraxin-collagen-30-tabletok-104186090/?c=750000000',
  },
  {
    id: 7,
    currentImageIndex: 0,
    name: 'Hema-Plex Iron',
    price: 7300,
    description: 'Назначение: для восполнения дефицита железа',
    rating: 4.8,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hb0/h94/63997289529374.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/he8/h6f/63997291888670.jpg?format=gallery-large', 'https://images.satu.kz/191645383_hema-plexiron-30.jpg'],
    link: 'https://kaspi.kz/shop/p/nature-s-plus-hema-plex-iron-kompleks-s-zhelezom-kapsuly-60-sht-101262413/?c=750000000',
  },
  {
    id: 8,
    currentImageIndex: 0,
    name: 'Глицин Актив',
    price: 189,
    description: 'Назначение: для нервной системы',
    rating: 5.0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h31/ha3/68314620919838.jpg?format=gallery-large', 'https://biosfera.kz/image/cache/data/news/2021/02.21/glicin-700x350c.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h80/64530238111774.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/farmgrupp-ooo-glitsin-aktiv-100-mg-tabletki-50-sht-101113562/?c=750000000',
  },
  {
    id: 9,
    currentImageIndex: 0,
    name: 'Магний В6',
    price: 1399,
    description: 'Для кого: универсальные',
    rating: 2.9,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd2/haf/63990614851614.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h71/63990617866270.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h24/h35/63990622060574.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/evalar-zao-vitamin-magnii-v6-30-tabletki-100729384/?c=750000000',
  },
  {
    id: 10,
    currentImageIndex: 0,
    name: 'Аминосорб',
    price: 8963,
    description: 'Назначение: общеукрепляющее средство',
    rating: 4.0,
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h59/hd1/64226024063006.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h00/hc6/64226061484062.jpg?format=gallery-large', 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h5f/64226064531486.jpg?format=gallery-large'],
    link: 'https://kaspi.kz/shop/p/aminosorb-prirodnyi-sorbent-sirop-300-ml-101125414/?c=750000000',
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/