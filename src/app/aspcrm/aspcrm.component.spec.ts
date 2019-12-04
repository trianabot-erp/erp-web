import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspcrmComponent } from './aspcrm.component';

describe('AspcrmComponent', () => {
  let component: AspcrmComponent;
  let fixture: ComponentFixture<AspcrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspcrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspcrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
