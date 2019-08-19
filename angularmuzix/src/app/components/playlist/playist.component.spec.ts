import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayistComponent } from './playist.component';

describe('PlayistComponent', () => {
  let component: PlayistComponent;
  let fixture: ComponentFixture<PlayistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
