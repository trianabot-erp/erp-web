import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsaddhsnComponent } from './productsaddhsn.component';

describe('ProductsaddhsnComponent', () => {
  let component: ProductsaddhsnComponent;
  let fixture: ComponentFixture<ProductsaddhsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsaddhsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsaddhsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
