import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetnCourseListsComponent } from './studetn-course-lists.component';

describe('StudetnCourseListsComponent', () => {
  let component: StudetnCourseListsComponent;
  let fixture: ComponentFixture<StudetnCourseListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetnCourseListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudetnCourseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
