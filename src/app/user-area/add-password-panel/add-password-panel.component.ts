import { Component } from '@angular/core';
import { FormControl, FormGroup,FormsModule} from '@angular/forms';
import { UserAreaService } from '../user-area.service';
import { catchError, tap } from 'rxjs';
@Component({
  selector: 'app-add-password-panel',
  templateUrl: './add-password-panel.component.html',
  styleUrls: ['./add-password-panel.component.scss']
})
export class AddPasswordPanelComponent {
  StatusRequest = "Undone"
  namePassword?:string
    password?: string
  constructor(private proxy: UserAreaService) {

  }
  async addPassword() {


    this.proxy.createPassword$(this.namePassword!, this.password!).pipe(
      tap(() => this.StatusRequest = 'Done'),
      catchError(() => this.StatusRequest = 'Undone')
    ).subscribe()

  }
  cleanField(){
    this.namePassword=""
    this.password=""
    this.StatusRequest="Undone"
  }
}
