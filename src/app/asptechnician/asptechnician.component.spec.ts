import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsptechnicianComponent } from './asptechnician.component';

describe('AsptechnicianComponent', () => {
  let component: AsptechnicianComponent;
  let fixture: ComponentFixture<AsptechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsptechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsptechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
