import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',

  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})

export class ProductDetailsComponent implements OnInit {
  onSubmitrate() {
    
  }
  product: Product | undefined;
  ratingForm: FormGroup;
  currentImgIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.ratingForm = this.formBuilder.group({
    rating: [null, Validators.required],
    });
  }
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  share(product: Product){
    
  }

  submitRating(product: Product) {
    if (this.ratingForm.valid) {
      const submittedRating = this.ratingForm.value.rating;
  
      // Update the rating property of the current product
      if (this.product) {
        this.product.sum += submittedRating;
        this.product.cnt++;

        this.product.rating = this.product.sum / this.product.cnt;
        window.alert(`Thank you for rating: ${submittedRating}`);
      }
    } else {
      window.alert('Please select a rating before submitting.');
    }
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  nextImage(product: Product) {
    this.currentImgIndex = (this.currentImgIndex + 1) % (product.imgGallery.length || 1);
  }
}
