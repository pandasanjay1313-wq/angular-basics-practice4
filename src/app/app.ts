import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inputs } from './inputs/inputs';
import { Lists } from './lists/lists';
import { Dashboard } from './dashboard/dashboard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule,Inputs,Lists,RouterLink, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
///Reactive form
///noAdmin
 noAdmin(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'admin' || control.value === 'Admin') {
      return { noAdmin: true };
    }
    return null;
  }

  //indianPhone number
indianPhone(control: AbstractControl): ValidationErrors | null{
  const pattern = /^[6-9]\d{9}$/;
   if (control.value && !pattern.test(control.value)) {
      return { indianPhone: true };
  }
    return null;
}

////gmail Only
 gmailOnly(control: AbstractControl): ValidationErrors | null {
    if (control.value && !control.value.endsWith('@gmail.com')) {
      return { gmailOnly: true };
    }
    return null;
  }
/////password special characters
specialChar(control: AbstractControl): ValidationErrors | null{
   const pattern = /[!@#$%^&*(),.?":{}|<>~]/;

    if (control.value && !pattern.test(control.value)) {
      return { specialChar: true };
    }

    return null;
}
/////confirm password
 matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }

userForm = new FormGroup({
  age : new FormControl<number | null>(null, [Validators.required, Validators.min(18), Validators.max(45)]),
  phone:new FormControl('',[Validators.required, this.indianPhone]),
  name: new FormControl('',[Validators.required,this.noAdmin]),
  email: new FormControl('',[Validators.required,Validators.email, this.gmailOnly]),
  passwordGroup: new FormGroup({
    password: new FormControl(null,[Validators.required, this.specialChar]),
    confirmPassword: new FormControl(null,[Validators.required,])
  },{ validators: this.matchPassword })

})
  patchData(){
   this.userForm.patchValue({
    name:'sanjay',
    age: 22 ,
   });
  }

  setData(){
    this.userForm.setValue({
      age: 23,
      phone: null,
      name: 'sanjay jaishankar',
      email: 'sanjay123@gmail.com',
      passwordGroup: {
        password: null,
        confirmPassword: null
      }
    })
  }


submit(){
 if (this.userForm.valid){}
}


//  user = {
//     name: '',
//     phone: '',
//     email: ''
//   };

//   submittedUser = {
//     name: '',
//     phone: '',
//     email: ''
//   };

//   city='';
//   submittedCity ='';


//   submitForm(){
//     this.submittedUser = { ...this.user };
//      this.submittedCity = this.city;
//   }

 
  
}
  