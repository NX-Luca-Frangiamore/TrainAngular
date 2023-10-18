import { Component } from '@angular/core';
import {FormControl,FormGroup}from '@angular/forms'
import {HttpParams } from '@angular/common/http';
import { ManageTokenService } from '../../manage-token.service';
import { RepositoryService } from 'src/app/repository.service';
interface Password{
  name:string;
  password:string;
}
@Component({
  selector: 'app-show-get-password',
  templateUrl: './get-password.component.html',
  styleUrls: ['./get-password.component.scss']
})
export class ShowGetPasswordComponent {
  password!:Password
  form:FormGroup=new FormGroup({
    namePassword:new FormControl("")
  })
  constructor(private http:RepositoryService, private token:ManageTokenService){}
  
  async getPassword(){
 
    let p=new HttpParams()
    p=p.append('namePassword',this.form.get("namePassword")?.value)
    this.password=await this.http.getPassword(p,this.token.getToken())
    console.log(this.password)
  }
}
