import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Scelte/home/home.component';
import { LoginComponent } from './login/login.component';
import { ChangeUtenteComponent } from './manage-profile/change-utente/change-utente.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "home/changeUtente", component: ChangeUtenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
