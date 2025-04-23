import { RouterLink } from '@angular/router';
import { Product } from './../../../shared/interfaces/product.interface';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();

  addToCart = output<Product>();

  add(event: Event){
    event.stopPropagation();
    event.preventDefault();
    this.addToCart.emit(this.product());
  }
}
