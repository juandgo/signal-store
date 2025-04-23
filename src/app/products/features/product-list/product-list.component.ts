import { Product } from './../../../shared/interfaces/product.interface';
import { ProductsStateService } from '../../data-access/product-state.service';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsState = inject(ProductsStateService);
  carState = inject(CartStateService).state;

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
  }

  addToCart(product: Product){
    this.carState.add({
      product,
      quantity: 1,
    });
  }
}
