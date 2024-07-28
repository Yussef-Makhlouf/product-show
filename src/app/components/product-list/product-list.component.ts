import { Component, Input } from '@angular/core';
import { IProduct } from '../../app.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];

}
