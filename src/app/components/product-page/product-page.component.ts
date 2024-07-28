import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../app.component';
import { ProductListComponent } from "../product-list/product-list.component";


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: string[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  sortDirection: string = 'asc';

  constructor(private ProductService: ProductService) {}

  // ngOnInit(): void {
  //   this.products = this.ProductService.getProducts();
  //   this.filteredProducts = this.products;
  //   this.categories = ['all', ...new Set(this.products.map(product => product.category))];
  // }
  // filterProducts(): void {
  //   let filtered = this.products;

  //   if (this.selectedCategory !== 'all') {
  //     filtered = filtered.filter(product => product.category === this.selectedCategory);
  //   }

  //   if (this.searchTerm) {
  //     filtered = filtered.filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  //   }

  //   this.sortProducts(filtered);
  // }

  // sortProducts(products: IProduct[]): void {
  //   this.filteredProducts = products.sort((a, b) => {
  //     const direction = this.sortDirection === 'asc' ? 1 : -1;
  //     return direction * (a.title.localeCompare(b.title));
  //   });
  // }

  // onSearchTermChange(event: Event): void {
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   this.filterProducts();
  // }

  // onCategoryChange(event: Event): void {
  //   this.selectedCategory = (event.target as HTMLSelectElement).value;
  //   this.filterProducts();
  // }

  // onSortDirectionChange(event: Event): void {
  //   this.sortDirection = (event.target as HTMLSelectElement).value;
  //   this.filterProducts();
  // }
  ngOnInit(): void {
    this.products = this.ProductService.getProducts();
    this.filteredProducts = this.products;
    this.categories = ['all', ...new Set(this.products.map(product => product.category))];
  }

  filterProducts(): void {
    let filtered = this.products;

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    this.sortProducts(filtered);
  }

  sortProducts(products: IProduct[]): void {
    this.filteredProducts = products.sort((a, b) => {
      const direction = this.sortDirection === 'asc' ? 1 : -1;
      return direction * (a.title.localeCompare(b.title));
    });
  }

  onSearchTermChange(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.filterProducts();
  }

  onCategoryChange(event: Event): void {
    this.selectedCategory = (event.target as HTMLSelectElement).value;
    this.filterProducts();
  }

  onSortDirectionChange(event: Event): void {
    this.sortDirection = (event.target as HTMLSelectElement).value;
    this.filterProducts();
  }
}
