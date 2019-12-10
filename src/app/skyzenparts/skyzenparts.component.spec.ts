import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyzenpartsComponent } from './skyzenparts.component';

describe('SkyzenpartsComponent', () => {
  let component: SkyzenpartsComponent;
  let fixture: ComponentFixture<SkyzenpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkyzenpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyzenpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
