import { Component } from '@angular/core';
import {FormControl,FormGroup}from '@angular/forms'
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from '../../app.module';
import { ManageTokenService } from '../../manage-token.service';
import { RepositoryService } from 'src/app/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  nomeUtente!:string
  constructor(private http:RepositoryService,private token:ManageTokenService){
    this.getUtente()
  }
  async getUtente(){
    this.nomeUtente=(await this.http.getUtente(this.token.getToken()))["usernameUtente"];
  }
}
