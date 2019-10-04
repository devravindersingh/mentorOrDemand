import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModeComponent } from './guest-mode/guest-mode.component';
import { StudentModeComponent } from './student-mode/student-mode.component';
import { MentorModeComponent } from './mentor-mode/mentor-mode.component';
import { StudentRegisterComponent } from './student-mode/student-register/student-register.component';
import { MentorRegisterComponent } from './mentor-mode/mentor-register/mentor-register.component';
import { LoginComponent } from './student-mode/login/login.component';
import { CoursesViewComponent } from './guest-mode/courses-view/courses-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { ProfileViewComponent } from './student-mode/profile-view/profile-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SearchModeComponent } from './student-mode/search-mode/search-mode.component';
import { MentorListComponent } from './admin-mode/mentor-list/mentor-list.component';
import { StudentListComponent } from './admin-mode/student-list/student-list.component';
import { CourseListComponent } from './admin-mode/course-list/course-list.component';
import { AdminModeComponent } from './admin-mode/admin-mode.component';
import { MentorProfileComponent } from './mentor-mode/mentor-profile/mentor-profile.component';
import { SnavbarComponent } from './student-mode/snavbar/snavbar.component';

const appRoutes:Routes = [
  {path:'', component: HomeViewComponent},
  {path:'guest', component: GuestModeComponent},
  {path:'student', component: StudentModeComponent},
  {path:'mentor', component: MentorModeComponent},
  {path:'studentRegister', component: StudentRegisterComponent},
  {path:'mentorRegister', component: MentorRegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'courses', component: CoursesViewComponent},
  {path:'studentPayment', component: PaymentViewComponent},
  {path:'studentProfile', component: ProfileViewComponent},
  {path:'admin', component: AdminModeComponent},
  {path:'adminCourseList', component: CourseListComponent},
  {path:'adminMentorList', component: MentorListComponent},
  {path:'adminStudentList', component: StudentListComponent},
  {path:'searchStuff', component: SearchModeComponent},
  {path:'mentorProfile', component: MentorProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    GuestModeComponent,
    StudentModeComponent,
    MentorModeComponent,
    StudentRegisterComponent,
    MentorRegisterComponent,
    LoginComponent,
    CoursesViewComponent,
    PaymentViewComponent,
    ProfileViewComponent,
    HomeViewComponent,
    SearchModeComponent,
    MentorListComponent,
    StudentListComponent,
    CourseListComponent,
    AdminModeComponent,
    MentorProfileComponent,
    SnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
