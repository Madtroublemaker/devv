import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, products } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent {
  @Input() categoryItem: Product|undefined;  
  @Output() deleteItem = new EventEmitter<Product>;

  products = [...products];

  share(product: Product) {
    const shareUrl = encodeURIComponent(product.link);
    const telegramShareUrl = `https://t.me/share/url?url=${shareUrl}`;

    // Open the Telegram share link in a new window
    window.open(telegramShareUrl, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  removeOut(){
    this.deleteItem.emit(this.categoryItem);
  }

  like(){
    if(this.categoryItem){
      this.categoryItem.like++;
    }
  }
}
