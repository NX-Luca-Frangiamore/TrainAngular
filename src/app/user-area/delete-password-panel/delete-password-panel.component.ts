import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserAreaService } from '../user-area.service';
import { catchError, of, tap } from 'rxjs';
@Component({
  selector: 'app-delete-password-panel',
  templateUrl: './delete-password-panel.component.html',
  styleUrls: ['./delete-password-panel.component.scss'],
})
export class DeletePasswordPanelComponent {
  StatusRequest = 'Undone';
  namePassword?: string;
  constructor(private userAreaService: UserAreaService) {}
  async deletePassword() {
    this.userAreaService
      .deletePassword$(this.namePassword!)
      .pipe(
        tap((result) => {
          if (result.isSuccess) this.StatusRequest = 'Done';
          else {
            alert(result.errorMessage);
            this.StatusRequest = 'Undone';
          }
        }),
      )
      .subscribe();
  }
  cleanField() {
    this.namePassword = '';
    this.StatusRequest = 'Undone';
  }
}
