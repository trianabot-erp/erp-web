import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavoneComponent } from './sidenavone.component';

describe('SidenavoneComponent', () => {
  let component: SidenavoneComponent;
  let fixture: ComponentFixture<SidenavoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
