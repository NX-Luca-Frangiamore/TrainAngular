import { Component } from '@angular/core';
import {FormControl,FormGroup,FormsModule} from '@angular/forms'
import { Password } from 'src/app/infrastructure/Domain/password';
import { UserAreaService } from '../user-area.service';
import { tap } from 'rxjs';
@Component({
  selector: 'app-get-password-panel',
  templateUrl: './get-password-panel.component.html',
  styleUrls: ['./get-password-panel.component.scss']
})
export class GetPasswordPanelComponent {
  password!:Password
  namePassword?:string;
  constructor(private proxy:UserAreaService){}
  
  async getPassword(){
    this.proxy.getPassword$(this.namePassword!).pipe(
      tap(x=>this.password=x),
      tap((x)=>console.log(x))
    ).subscribe()
    
  }
}