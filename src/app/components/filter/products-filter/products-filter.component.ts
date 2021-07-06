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
  @Output() onChangeLoading = new EventEmitter<boolean>();

  constructor(private productsService: ProductsService) {
    this.filter = {category: 'all'}
  }

  public changeCategory(): void {
    this.onChangeLoading.emit(true);
    if (this.filter.category === 'all') {
      this.productsService.getAllProducts().subscribe((products: IProduct[]) => {
          this.onChangeFilter.emit(products);
          this.onChangeLoading.emit(false);
        }
      )
      return;
    }
    this.productsService.getProductsInSpecificCategory(this.filter.category)
      .subscribe((products: IProduct[]) => {
          this.onChangeFilter.emit(products);
          this.onChangeLoading.emit(false);
        }
      )
  }

  public initCategoryList(): void {
    this.onChangeLoading.emit(true);
    this.productsService.getAllCategories().subscribe((categories: []) => {
      this.categoryList = categories;
      this.onChangeLoading.emit(false);
    });
  }

  ngOnInit(): void {
    this.initCategoryList();
  }
}
