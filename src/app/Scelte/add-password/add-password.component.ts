import { Component } from '@angular/core';
import { ManageTokenService } from 'src/app/manage-token.service';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from '../../app.module';
import {FormControl,FormGroup}from '@angular/forms'
import { RepositoryService } from 'src/app/repository.service';
@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent {
  StatusRequest="Undone"
  form:FormGroup=new FormGroup({
     namePassword:new FormControl(""),
     password:new FormControl("")
   })
  constructor(private token:ManageTokenService,private http:RepositoryService){

  }
  async addPassword(){
    let p=new HttpParams()
    .append('namePassword',this.form.get("namePassword")?.value)
    .append('password',this.form.get("password")?.value)

    if(await this.http.AddPassword(p,this.token.getToken())==null)
        this.StatusRequest='Undone'
     else
        this.StatusRequest='Done'
  }


}
