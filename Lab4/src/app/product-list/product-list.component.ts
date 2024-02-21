import { Component } from '@angular/core';

import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(productName: string, productLink: string) {
    const shareMessage = `${productName} - ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.open(telegramLink, '_blank');
  }

  nextImage(product: Product) {
    if (product.images.length > 1) {
      product.currentImageIndex = (product.currentImageIndex + 1) % product.images.length;
    }
  }

  prevImage(product: Product) {
    if (product.images.length > 1) {
      product.currentImageIndex = (product.currentImageIndex - 1 + product.images.length) % product.images.length;
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
