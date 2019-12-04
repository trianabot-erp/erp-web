import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaspComponent } from './addasp.component';

describe('AddaspComponent', () => {
  let component: AddaspComponent;
  let fixture: ComponentFixture<AddaspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
