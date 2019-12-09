import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavproductsComponent } from './sidenavproducts.component';

describe('SidenavproductsComponent', () => {
  let component: SidenavproductsComponent;
  let fixture: ComponentFixture<SidenavproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
