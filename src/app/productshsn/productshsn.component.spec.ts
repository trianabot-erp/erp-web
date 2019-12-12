import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductshsnComponent } from './productshsn.component';

describe('ProductshsnComponent', () => {
  let component: ProductshsnComponent;
  let fixture: ComponentFixture<ProductshsnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductshsnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductshsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
