import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { UserAreaService } from '../user-area.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent {
    newUsername!:string
    newPassword!:string
constructor(private service:UserAreaService,private router:Router){}
async changeUtente(){


  await this.service.changeCurrentUser$(this.newUsername!,this.newPassword!).subscribe()
  this.router.navigate(["home"])
}
}
