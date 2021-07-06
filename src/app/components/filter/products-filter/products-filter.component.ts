import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/interfaces/product";

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
  public filter: { category: 'all' };
  public categoryList: [] | undefined;

  @Output() onChangeFilter = new EventEmitter<IProduct[]>();

  constructor(private productsService: ProductsService) {
    this.filter = {category: 'all'}
  }

  public changeCategory(): void {
    if (this.filter.category === 'all') {
      this.productsService.getAllProducts().subscribe(
        (products: IProduct[]) => {
          this.onChangeFilter.emit(products);
        }
      )
      return;
    }
    this.productsService.getProductsInSpecificCategory(this.filter.category).subscribe(
      (products: IProduct[]) => {
        this.onChangeFilter.emit(products);
      }
    )
  }

  public initCategoryList(): void {
    this.productsService.getAllCategories().subscribe(
      (categories: []) => {
        this.categoryList = categories;
      });
  }

  ngOnInit(): void {
    this.initCategoryList();
  }
}
