import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { GoogleAuthProvider } from "@firebase/auth";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {AuthService} from "../../core/service/auth/auth.service";
import {CookieService} from "../../core/service/cookie/cookie.service";

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router, private authService : AuthService, private cookieService:CookieService) {
  }


  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  loginWithEmail(){
    let email:string = this.loginform.get('email')?.value;
    let pwd :string = this.loginform.get('password')?.value;

    this.angularFireAuth.signInWithEmailAndPassword(email,pwd).then((res)=>{
      console.log(res);
      this.authService.updateAuthStatus(true);
      this.cookieService.setCookie('token', email, 1);
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


  loginWithGoogle(){
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

  // async signIn() {
  //   let email: string = this.loginform.get('email')?.value;
  //   let password: string = this.loginform.get('password')?.value;
  //
  //   try {
  //     const auth = getAuth();
  //     await signInWithEmailAndPassword(auth, email, password);
  //     this.router.navigate(['/dashboard']);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
