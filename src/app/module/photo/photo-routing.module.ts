import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotoDefaultComponent} from "./photo-default/photo-default.component";

const routes: Routes = [
  {path:'', redirectTo:'/dashboard/photos/photo-default', pathMatch:"full"},
  {path:'photo-default', component:PhotoDefaultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
