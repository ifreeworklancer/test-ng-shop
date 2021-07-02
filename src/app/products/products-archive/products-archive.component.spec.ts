import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsArchiveComponent } from './products-archive.component';

describe('ProductsArchiveComponent', () => {
  let component: ProductsArchiveComponent;
  let fixture: ComponentFixture<ProductsArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
