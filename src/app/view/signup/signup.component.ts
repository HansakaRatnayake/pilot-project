import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CookieService} from "../../core/service/cookie/cookie.service";
import {GoogleAuthProvider} from "@firebase/auth";
import {AuthService} from "../../core/service/auth/auth.service";

@Component({
    selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private cookieService:CookieService, private authService:AuthService) {}


  signupform: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required])
  })



  async signUp() {
    let email:string = this.signupform.get('email')?.value;
    let password :string = this.signupform.get('password')?.value;
    let confirmPassword :string = this.signupform.get('confirmPassword')?.value;

    try {
      this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res=>{
        console.log(res);
        this.cookieService.setCookie('token',email,1);
        this.router.navigate(['/dashboard']);
      }).catch(error=>{
        console.log(error)
      })

    } catch (error) {
      console.log(error);
    }
  }

  signUpWithGoogle() {
    this.angularFireAuth.signInWithPopup(new GoogleAuthProvider())
      .then((res)=>{
        console.log(res);
        this.authService.updateAuthStatus(true);
        this.cookieService.setCookie('token', res.user?.email, 1);
        this.router.navigateByUrl("/dashboard").then((res)=>{
          console.log(res);
        }).catch((err)=>{
          console.log(err);
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }
}
