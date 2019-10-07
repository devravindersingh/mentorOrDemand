import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModeComponent } from './guest-mode/guest-mode.component';
import { StudentModeComponent } from './student-mode/student-mode.component';
import { MentorModeComponent } from './mentor-mode/mentor-mode.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { CoursesViewComponent } from './guest-mode/courses-view/courses-view.component';
import { ProfileViewComponent } from './student-mode/profile-view/profile-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SearchModeComponent } from './student-mode/search-mode/search-mode.component';
import { MentorListComponent } from './admin-mode/mentor-list/mentor-list.component';
import { StudentListComponent } from './admin-mode/student-list/student-list.component';
import { CourseListComponent } from './admin-mode/course-list/course-list.component';
import { AdminModeComponent } from './admin-mode/admin-mode.component';
import { MentorProfileComponent } from './mentor-mode/mentor-profile/mentor-profile.component';
import { SnavbarComponent } from './student-mode/snavbar/snavbar.component';
import { StudentWayComponent } from './student-way/student-way.component';
import { MentorWayComponent } from './mentor-way/mentor-way.component';
import { StudentPaymentComponent } from './student-mode/student-payment/student-payment.component';
import { StudetnCourseListsComponent } from './student-mode/studetn-course-lists/studetn-course-lists.component';


// import { ValidatorService } from "../services/validator.service";
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { MnavbarComponent } from './mentor-mode/mnavbar/mnavbar.component';
// import { AuthService } from '../services/auth.service';
const appRoutes:Routes = [
  {path:'', component: HomeViewComponent},
    {path:'studentWay', component: StudentWayComponent},
    {path:'studentRegister',component: StudentRegisterComponent},  
    {path:'student', component: StudentModeComponent, 
      children: [
        {path:'', redirectTo: 'studentProfile', pathMatch: 'full'},
        {path:'studentProfile', component: ProfileViewComponent},
        {path:'studentSearch', component: SearchModeComponent},
        {path:'', component: StudetnCourseListsComponent},
       ]
    },
    {path:'mentorWay', component:MentorWayComponent},
    {path:'mentorRegister', component: MentorRegisterComponent},
    {path:'mentor', component: MentorModeComponent, 
      children:[
        {path:'', redirectTo: 'mentorProfile', pathMatch: 'full'},
        {path:'myCourses', component: CoursesViewComponent},
        {path:'mentorProfile', component: MentorProfileComponent},
      ]
    },
        
    {path:'admin', component: AdminModeComponent, 
      children:[
        {path:'adminCourseList', component: CourseListComponent},
        {path:'adminMentorList', component: MentorListComponent},
        {path:'adminStudentList', component: StudentListComponent},
      ]
    },
    
    {path:'guest', component: GuestModeComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    GuestModeComponent,
    StudentModeComponent,
    MentorModeComponent,
    StudentRegisterComponent,
    MentorRegisterComponent,
    CoursesViewComponent,
    ProfileViewComponent,
    HomeViewComponent,
    SearchModeComponent,
    MentorListComponent,
    StudentListComponent,
    CourseListComponent,
    AdminModeComponent,
    MentorProfileComponent,
    SnavbarComponent,
    StudentWayComponent,
    MentorWayComponent,
    StudentPaymentComponent,
    StudetnCourseListsComponent,
    MnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgFlashMessagesModule,
    HttpModule    
  ],
  providers: [
    // ValidatorService,
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
