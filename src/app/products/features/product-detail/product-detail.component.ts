import { CartStateService } from './../../../shared/data-access/cart-state.service';
import { CurrencyPipe } from '@angular/common';
import { ProductDetailStateService } from './../../data-access/product-detail-state.service';
import { Component, effect, inject, input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;

  id = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }

  addToCart(){
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1,
    });
  }
}
