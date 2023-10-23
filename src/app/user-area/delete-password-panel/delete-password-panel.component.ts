import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserAreaService } from '../user-area.service';
import {catchError,tap} from 'rxjs'
@Component({
  selector: 'app-delete-password-panel',
  templateUrl: './delete-password-panel.component.html',
  styleUrls: ['./delete-password-panel.component.scss']
})
export class DeletePasswordPanelComponent {
  StatusRequest = "Undone"
  namePassword?: string
  constructor(private proxy: UserAreaService) {

  }
  async deletePassword() {
    
    
    this.proxy.deletePassword$(this.namePassword!).pipe(
      tap(() => this.StatusRequest = 'Done'),
      catchError(() => this.StatusRequest = 'Undone')
    ).subscribe()

  }
}
