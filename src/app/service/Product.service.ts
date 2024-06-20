import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  async getProducts(): Promise<Product[] | undefined> {
    try {
      const response = await this.http.get<Product[]>(this.apiUrl).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
      return undefined;
    }
  }
}
