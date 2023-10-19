import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ManageTokenService } from './infrastructure/token-manager/manage-token.service';

import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PasswordGenProxyModule } from './infrastructure/password-gen-proxy/password-gen-proxy.module';
import { LoginComponent } from './login/login.component';
import { GetPasswordPanelComponent } from './user-area/get-password-panel/get-password-panel.component';
import { ProfileOptionsComponent } from './user-area/profile-options/profile-options.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { AddPasswordPanelComponent } from './user-area/add-password-panel/add-password-panel.component';
import { UserChangeComponent } from './user-area/user-change/user-change.component';
export const url: string = "https://localhost:7134"
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetPasswordPanelComponent,
    ProfileOptionsComponent,
    UserAreaComponent,
    AddPasswordPanelComponent,
    UserChangeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
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
