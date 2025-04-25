import { CurrencyPipe } from '@angular/common';
import { ProductItemCart } from './../../../shared/interfaces/product.interface';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemCart>();

  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();
}
