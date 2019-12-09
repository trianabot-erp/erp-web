import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartsskyzenComponent } from './addpartsskyzen.component';

describe('AddpartsskyzenComponent', () => {
  let component: AddpartsskyzenComponent;
  let fixture: ComponentFixture<AddpartsskyzenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpartsskyzenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpartsskyzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
