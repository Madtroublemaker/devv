import { Component, Input, SimpleChanges } from '@angular/core';
import { Product, products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  products = [...products];
  @Input() category : string | undefined;
  categoryItems: Product[] = [];

  ngOnInit(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('category' in changes) {
      this.filterCategoryItems();
    }
  }

  private filterCategoryItems(): void {
    if(!this.category){
      this.categoryItems = this.products;
    }
    else{
      this.categoryItems = this.products.filter(item => item.category === this.category);  
    }
  }

  removeItem(item: Product): void {
    const index = this.products.indexOf(item);
    if (index > -1) {
      this.products.splice(index, 1);
      this.filterCategoryItems();
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
