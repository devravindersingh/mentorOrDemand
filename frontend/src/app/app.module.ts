import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestModeComponent } from './guest-mode/guest-mode.component';
import { StudentModeComponent } from './student-mode/student-mode.component';
import { MentorModeComponent } from './mentor-mode/mentor-mode.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestModeComponent,
    StudentModeComponent,
    MentorModeComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
