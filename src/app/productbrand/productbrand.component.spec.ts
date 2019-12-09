import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbrandComponent } from './productbrand.component';

describe('ProductbrandComponent', () => {
  let component: ProductbrandComponent;
  let fixture: ComponentFixture<ProductbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
