import {Component, Input, OnInit} from '@angular/core';
import {IProductsPreview} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss']
})
export class ProductsPreviewComponent implements OnInit {
  @Input() previewData?: IProductsPreview;

  constructor() { }

  ngOnInit(): void {
  }

}
