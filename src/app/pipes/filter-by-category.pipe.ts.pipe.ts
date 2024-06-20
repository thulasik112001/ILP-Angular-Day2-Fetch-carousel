import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product.interface';

@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(products: any, category: string): any {
    if (!category) {
      return products;
    }
    console.log(products);
    return products.products.filter((product: { category: string; }) => product.category === category);
  }
}
