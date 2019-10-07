import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorWayComponent } from './mentor-way.component';

describe('MentorWayComponent', () => {
  let component: MentorWayComponent;
  let fixture: ComponentFixture<MentorWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
