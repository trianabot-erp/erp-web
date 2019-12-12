import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddsubcategoryComponent } from './productaddsubcategory.component';

describe('ProductaddsubcategoryComponent', () => {
  let component: ProductaddsubcategoryComponent;
  let fixture: ComponentFixture<ProductaddsubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductaddsubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaddsubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
