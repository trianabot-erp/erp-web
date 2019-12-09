import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddbrandComponent } from './productaddbrand.component';

describe('ProductaddbrandComponent', () => {
  let component: ProductaddbrandComponent;
  let fixture: ComponentFixture<ProductaddbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductaddbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaddbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
