import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddcategoryComponent } from './productaddcategory.component';

describe('ProductaddcategoryComponent', () => {
  let component: ProductaddcategoryComponent;
  let fixture: ComponentFixture<ProductaddcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductaddcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
