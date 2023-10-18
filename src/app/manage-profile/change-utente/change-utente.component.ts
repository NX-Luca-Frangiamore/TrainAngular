import { Component } from '@angular/core';
import { RepositoryService } from 'src/app/repository.service';
import { ManageTokenService } from 'src/app/manage-token.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { FormControl,FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
@Component({
  selector: 'app-change-utente',
  templateUrl: './change-utente.component.html',
  styleUrls: ['./change-utente.component.scss']
})
export class ChangeUtenteComponent {
  form:FormGroup= new FormGroup({
    newUsername:new FormControl(''),
    newPassword:new FormControl(''),
})
  @Input()nomeUtente!:string
  constructor(private http:RepositoryService,private token:ManageTokenService,private router:Router){}
  
  async changeUtente(){
    await this.http.changeUtente(this.getParmsWithUsernamePassword(),this.token.getToken())
    this.router.navigate(["home"])
 }
 private getParmsWithUsernamePassword(){
  let params = new HttpParams()
  .set("usernameNew", this.form.get("newUsername")?.value)
  .set("passwordNew", this.form.get("newPassword")?.value);
  return params
}
}
