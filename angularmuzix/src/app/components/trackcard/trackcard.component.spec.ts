import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackcardComponent } from './trackcard.component';

describe('TrackcardComponent', () => {
  let component: TrackcardComponent;
  let fixture: ComponentFixture<TrackcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
