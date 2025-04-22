import { ProductsService } from './products.service';
import { Product } from './../../../shared/interfaces/product.interface';
import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable()

export class ProductsStateService{

  private ProductsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [

    ]
  });
}