import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'  // 👈 Esto es clave
})

export class ProductsService {

  private http = inject(HttpClient);

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}