
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexFormWithValuesComponent } from './filebrowserpanel/index-form-with-values/index-form-with-values.component';
import { IndexFormComponent } from './filebrowserpanel/index-form/index-form.component';

export const routes: Routes = [

  {path:'app-index-form',component:IndexFormComponent},
  {path:'app-index-form-with-values',component:IndexFormWithValuesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }