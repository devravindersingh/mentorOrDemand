import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWayComponent } from './student-way.component';

describe('StudentWayComponent', () => {
  let component: StudentWayComponent;
  let fixture: ComponentFixture<StudentWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
