import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ManageTokenService } from './manage-token.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Scelte/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowGetPasswordComponent } from './Scelte/get-password/get-password.component';
import { AddPasswordComponent } from './Scelte/add-password/add-password.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ChangeUtenteComponent } from './manage-profile/change-utente/change-utente.component';
import { PasswordGenProxyModule } from './infrastructure/password-gen-proxy/password-gen-proxy.module';
import { LoginComponent } from './login/login.component';
export const url: string = "https://localhost:7134"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowGetPasswordComponent,
    AddPasswordComponent,
    ManageProfileComponent,
    ChangeUtenteComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    PasswordGenProxyModule
  ],
  providers: [ManageTokenService],
  bootstrap: [AppComponent]
})

export class AppModule { }
