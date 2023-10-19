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
  form:FormGroup= new FormGroup({
    newUsername:new FormControl(''),
    newPassword:new FormControl(''),
})
constructor(private service:UserAreaService,private router:Router){}
async changeUtente(){
  await this.service.changeUser(this.form.get("newUsername")?.value,this.form.get("newPassword")?.value).subscribe()
  this.router.navigate(["home"])
}
}
