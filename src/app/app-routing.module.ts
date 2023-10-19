import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserAreaComponent } from './user-area/user-area.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: UserAreaComponent }
  //<!--{ path: "home/changeUtente", component: ChangeUtenteComponent }-->
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
