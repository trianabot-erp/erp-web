import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductskyzenComponent } from './addproductskyzen.component';

describe('AddproductskyzenComponent', () => {
  let component: AddproductskyzenComponent;
  let fixture: ComponentFixture<AddproductskyzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductskyzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductskyzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
