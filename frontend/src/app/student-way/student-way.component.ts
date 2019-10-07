import { Component, OnInit } from '@angular/core';
// import { ValidatorService } from '../../services/validator.service'; 
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/Router';

// import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-student-way',
  templateUrl: './student-way.component.html',
  styleUrls: ['./student-way.component.css']
})
export class StudentWayComponent implements OnInit {

  loginEmail: String;
  loginPassword: String;

  registerEmail: String;
  registerPassword: String;
  registerCPassword: String;


  constructor(
    //  private ValidatorService: ValidatorService,
    //  private ngFlashMessageService: NgFlashMessageService, 
    //  private authService: AuthService,
    ){}

  ngOnInit() {
  }

  // onRegisterSubmit(){
  //   const register = {
  //     username: this.registerEmail,
  //     password: this.registerPassword,
  //     password2: this.registerCPassword,
  //   }

  //   if(!this.ValidatorService.validateRegister(register)){
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages: ["fill all fields"], 
  //       dismissible: false, 
  //       timeout: false,
  //       type: 'danger'
  //     });
  //     this.router.navigate(['/studentRegister'])
  //     return false;
  //   }

  //   if(!this.ValidatorService.validateEmail(register.username)){
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages: ["email not valid"], 
  //       dismissible: false, 
  //       timeout: false,
  //       type: 'danger'
  //     });
  //   }

  //   if(register.password != register.password2){
  //     this.ngFlashMessageService.showFlashMessage({
  //       messages: ["password didnt match"], 
  //       dismissible: false, 
  //       timeout: false,
  //       type: 'danger'
  //     });
  //   }
  //   this.authService.registerUser(register).subscribe(data =>{
  //     if(data.success){
  //       this.ngFlashMessageService.showFlashMessage({
  //         messages: ["registered now"], 
  //         dismissible: false, 
  //         timeout: false,
  //         type: 'success'
  //       });
  //     }
  //     else {
  //       this.ngFlashMessageService.showFlashMessage({
  //         messages: ["something went wrong"], 
  //         dismissible: false, 
  //         timeout: false,
  //         type: 'danger'
  //       });
  //     }
  //   })
  // }
}

