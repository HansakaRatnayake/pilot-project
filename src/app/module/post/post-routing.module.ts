import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostDefaultComponent} from "./post-default/post-default.component";

const routes: Routes = [
  {path:'', redirectTo:'/dashboard/posts/post-default', pathMatch:"full"},
  {path:'post-default', component:PostDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
