import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {     HttpClientModule } from '@angular/common/http';
import { ManageTokenService } from './manage-token.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Scelte/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowGetPasswordComponent } from './Scelte/get-password/get-password.component';
import { AddPasswordComponent } from './Scelte/add-password/add-password.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ChangeUtenteComponent } from './manage-profile/change-utente/change-utente.component';
export  const url:string="https://localhost:7134"
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShowGetPasswordComponent,
    AddPasswordComponent,
    ManageProfileComponent,
    ChangeUtenteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "",component:LoginComponent},
      {path: "home",component:HomeComponent},
      {path:"home/changeUtente",component:ChangeUtenteComponent}
    ]),
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatMenuModule
  ],
  providers: [ManageTokenService],
  bootstrap: [AppComponent]
})

export class AppModule { }
