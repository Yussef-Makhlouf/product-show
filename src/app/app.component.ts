import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductPageComponent,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product-show';
}
