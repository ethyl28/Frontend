import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { EmailValidator, FormGroup } from '@angular/forms';
import {  Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input() signIn!: Login

    constructor(){}

    ngOnInit(): void {

    }

    signInButton(){
      console.log('signInButton');


    }

  }
















  // constructor(
  //   private router:Router
  // ) {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
  //       '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
  //     ),]),
  //     password: new FormControl('', [Validators.required,Validators.pattern(
  //       '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
  //     )])
  //   });
  //  }

  // ngOnInit(): void {
  // }

  // onSubmit(){
  //   if(!this.loginForm.valid){
  //     return;
  //   }
  //   localStorage.setItem('user',this.loginForm.value)
  //   this.router.navigate(['/home'])
  // }

