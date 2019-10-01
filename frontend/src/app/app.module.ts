import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModeComponent } from './guest-mode/guest-mode.component';
import { StudentModeComponent } from './student-mode/student-mode.component';
import { MentorModeComponent } from './mentor-mode/mentor-mode.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { LoginComponent } from './login/login.component';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { PaymentViewComponent } from './payment-view/payment-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SearchModeComponent } from './search-mode/search-mode.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AdminModeComponent } from './admin-mode/admin-mode.component';

const appRoutes:Routes = [
  {path:'', component: HomeViewComponent},
  {path:'guest', component: GuestModeComponent},
  {path:'student', component: StudentModeComponent},
  {path:'mentor', component: MentorModeComponent},
  {path:'footer', component: FooterSectionComponent},
  {path:'studentRegister', component: StudentRegisterComponent},
  {path:'mentorRegister', component: MentorRegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'courses', component: CoursesViewComponent},
  {path:'studentPayment', component: PaymentViewComponent},
  {path:'profile', component: ProfileViewComponent},
  {path:'admin', component: AdminModeComponent},
  {path:'adminCourseList', component: CourseListComponent},
  {path:'adminMentorList', component: MentorListComponent},
  {path:'adminStudentList', component: StudentListComponent},
  {path:'searchStuff', component: SearchModeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GuestModeComponent,
    StudentModeComponent,
    MentorModeComponent,
    FooterSectionComponent,
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
    AdminModeComponent
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
