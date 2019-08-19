import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trackcard2Component } from './trackcard2.component';

describe('Trackcard2Component', () => {
  let component: Trackcard2Component;
  let fixture: ComponentFixture<Trackcard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trackcard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trackcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
