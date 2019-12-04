import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyzenproductsComponent } from './skyzenproducts.component';

describe('SkyzenproductsComponent', () => {
  let component: SkyzenproductsComponent;
  let fixture: ComponentFixture<SkyzenproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyzenproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyzenproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
