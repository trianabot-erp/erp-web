import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpasswordgenerateComponent } from './newpasswordgenerate.component';

describe('NewpasswordgenerateComponent', () => {
  let component: NewpasswordgenerateComponent;
  let fixture: ComponentFixture<NewpasswordgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpasswordgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpasswordgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
