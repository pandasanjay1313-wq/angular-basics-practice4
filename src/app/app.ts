import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  age = new FormControl<number | null>(null, [Validators.required, Validators.min(18), Validators.max(45)])

userDetails = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(45)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
})

submit(){
  this.age.setValue(this.age.value);
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
  