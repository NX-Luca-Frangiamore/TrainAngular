import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { ManageTokenService } from 'src/app/manage-token.service';
import { RepositoryService } from 'src/app/repository.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-profile [nomeUtente]',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent {

  @Input() nomeUtente!: string


  menuChange = false
  constructor(private http: RepositoryService, private token: ManageTokenService, private router: Router) { }
  openMenuChange() {
    this.router.navigate(["home/changeUtente"])
  }
  deleteUtente() {
    this.http.deleteUtente(this.token.getToken())
    this.router.navigate(["/"])
  }


}
