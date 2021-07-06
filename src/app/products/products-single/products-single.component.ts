import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import {IProduct, IProductsPreview} from "../../shared/interfaces/product";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-products-single',
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.scss']
})
export class ProductsSingleComponent implements OnInit {
  public isLoading: boolean = false;
  public productId?: string;
  public product?: IProduct;
  public productsPreviewData: IProductsPreview;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) {
    this.productId = route.snapshot.params.id;
    this.productsPreviewData = {
      title: 'Most Popular Products',
      link: '/products',
      buttonText: 'View All',
      products: []
    }
  }

  public getProductData(id: string): void {
    this.isLoading = true;
    this.productsService.getSingleProduct(id)
      .subscribe((product: IProduct) => {
        if (product === null) {
          this.router.navigate(['products']);
        }
        this.product = product;
      }, () => {
      }, () => this.isLoading = false)
  }

  public initProductsList() {
    const limit = 3;
    this.productsService.getMostPopularProducts(limit).subscribe(
      (products: IProduct[]) => {
        this.productsPreviewData.products = products;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id !== null) {
        this.getProductData(params.id);
      }
    })
    this.initProductsList();
  }

}
