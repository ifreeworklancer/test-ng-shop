import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../shared/services/products.service";
import {IProduct} from "../../shared/interfaces/product";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-products-single',
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.scss']
})
export class ProductsSingleComponent implements OnInit {
  public isLoading: boolean = false;
  public productId?: string;
  public product?: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) {
    this.productId = route.snapshot.params.id;
  }

  public getProductData(): void {
    this.isLoading = true;
    if (this.productId) {
      this.productsService.getSingleProduct(this.productId)
        .subscribe((product: IProduct) => {
          if (product === null) {
            this.router.navigate(['products']);
          }
          this.product = product;
        }, () => {
        }, () => this.isLoading = false)

    }
  }

  ngOnInit(): void {
    this.getProductData();
  }

}
