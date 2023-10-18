import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { ManageTokenService } from '../manage-token.service';
import { Router } from '@angular/router';
import { url } from '../app.module';
import { RepositoryService } from '../repository.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form:FormGroup= new FormGroup({
    username: new FormControl(''),
    password:new FormControl(''),
})
  
  constructor(private http:RepositoryService,private token:ManageTokenService,private _router: Router){
  }
  private getParmsWithUsernamePassword(){
    let params = new HttpParams()
    .set("username", this.form.get("username")?.value)
    .set("password", this.form.get("password")?.value);
    return params
  }
  async Login() {
    let parms=this.getParmsWithUsernamePassword()
    let token=await this.http.getToken(parms);                            
    if(typeof token ==="string"){
       this.token.setToken(token)
       this._router.navigate(["home"])
    }else
       alert("credenziali non corrette")
  }
  async SignIn(){
    let parms=this.getParmsWithUsernamePassword()
   
    let token=await this.http.newUtente(parms)
    console.log("fdffe")
    if(typeof token==="string"){
       this.token.setToken(token)
       this._router.navigate(["home"])
    }else
       alert("Impossibile creare l'account")
  }
}
