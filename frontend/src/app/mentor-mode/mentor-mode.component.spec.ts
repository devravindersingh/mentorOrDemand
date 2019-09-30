import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorModeComponent } from './mentor-mode.component';

describe('MentorModeComponent', () => {
  let component: MentorModeComponent;
  let fixture: ComponentFixture<MentorModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
