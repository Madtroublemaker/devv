import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categoryValue: string | undefined;  // Add this line to declare the property
  products=  [...products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Initial load
    this.updateCategory();
    this.route.paramMap.subscribe(() => {
      this.updateCategory();
    });
  }

  private updateCategory() {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryValue = String(routeParams.get('value'));
  }
}
