import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { Password } from 'src/app/infrastructure/Domain/password';
import { UserAreaService } from '../user-area.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-get-password-panel',
  templateUrl: './get-password-panel.component.html',
  styleUrls: ['./get-password-panel.component.scss']
})
export class GetPasswordPanelComponent {
  password!:Password
  form:FormGroup=new FormGroup({
    namePassword:new FormControl("")
  })
  constructor(private proxy:UserAreaService){}
  
  async getPassword(){
    this.proxy.getPassword(this.form.get("namePassword")?.value).pipe(
      map(x=>this.password=x)
    )
    console.log(this.password)
  }
}