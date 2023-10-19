import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { UserAreaService } from '../user-area.service';
import { catchError, tap } from 'rxjs';
@Component({
  selector: 'app-add-password-panel',
  templateUrl: './add-password-panel.component.html',
  styleUrls: ['./add-password-panel.component.scss']
})
export class AddPasswordPanelComponent {
  StatusRequest="Undone"
  form:FormGroup=new FormGroup({
     namePassword:new FormControl(""),
     password:new FormControl("")
   })
  constructor(private proxy:UserAreaService){

  }
  async addPassword(){

    this.proxy.NewPassword(this.form.get("namePassword")?.value,this.form.get("password")?.value).pipe(
      tap(()=>this.StatusRequest='Done'),
      catchError(()=>this.StatusRequest='Undone')
    ).subscribe()
        
  }
}
