import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../shared/interfaces/product";
import {ProductsService} from "../../shared/services/products.service";

@Component({
  selector: 'app-products-archive',
  templateUrl: './products-archive.component.html',
  styleUrls: ['./products-archive.component.scss']
})
export class ProductsArchiveComponent implements OnInit {
  public isLoading: boolean = false;
  public productsList?: IProduct[];

  constructor(private productsService: ProductsService) {
  }

  public initProductList(): void {
    this.productsService.getAllProducts().subscribe((products: IProduct[]) => {
        this.productsList = products;
      }
    )
  }

  public changeProductList(value: IProduct[]): void {
    this.productsList = value;
  }

  public changeLoader(value: boolean): void {
    this.isLoading = value;
  }

  ngOnInit(): void {
    this.initProductList();
  }

}
