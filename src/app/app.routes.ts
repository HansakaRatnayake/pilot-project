import { Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {DashboardComponent} from "./view/dashboard/dashboard.component";
import {NotFoundComponent} from "./view/not-found/not-found.component";
import {LoginComponent} from "./view/login/login.component";
import {SignupComponent} from "./view/signup/signup.component";
import {authGuard} from "./core/guard/auth.guard";

export const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[authGuard], children:[
      {path:'photos', loadChildren:() => import("./module/photo/photo.module").then(m=>m.PhotoModule)},
      {path:'posts', loadChildren:() => import("./module/post/post.module").then(m=>m.PostModule)}
    ]
  },
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'**', component:NotFoundComponent}

];
