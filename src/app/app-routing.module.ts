import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
      {path:"userform", component:UserformComponent },
      {path:"dir", component:DirdemoComponent },
      {path:"pipe", component:PipedemoComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
