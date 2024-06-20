import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/Product.service';
import { Product } from '../models/Product.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterByCategoryPipe } from '../pipes/filter-by-category.pipe.ts.pipe';
import { ChunkPipe } from '../pipes/chunk.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByCategoryPipe,ChunkPipe]
})
export class ProductListComponent implements OnInit {
  products: Product[] | any = [];
  categories: string[] = [];
  error: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then(products => {
      this.products = products;
      this.extractCategories();
    }).catch(error => {
      this.error = error;
    });
  }


   extractCategories() : any {
    this.categories = Array.from(new Set(this.products.products.map((product: { category: any; }) => product.category)));
  }

  chunkArray(array: any[], size: number): any[][] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  }
}
