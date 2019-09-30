import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModeComponent } from './student-mode.component';

describe('StudentModeComponent', () => {
  let component: StudentModeComponent;
  let fixture: ComponentFixture<StudentModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
