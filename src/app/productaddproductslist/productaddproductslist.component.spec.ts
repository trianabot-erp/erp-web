import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddproductslistComponent } from './productaddproductslist.component';

describe('ProductaddproductslistComponent', () => {
  let component: ProductaddproductslistComponent;
  let fixture: ComponentFixture<ProductaddproductslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductaddproductslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaddproductslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
