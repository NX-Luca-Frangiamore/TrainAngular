import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { UserAreaService } from '../user-area.service';
import { catchError, finalize, of, tap } from 'rxjs';
import { handleError } from 'src/app/utils/hanlde-error.pipe';
@Component({
  selector: 'app-add-password-panel',
  templateUrl: './add-password-panel.component.html',
  styleUrls: ['./add-password-panel.component.scss']
})
export class AddPasswordPanelComponent {

  StatusRequest: 'Done' | 'Undone' = "Undone"
  namePassword: string | undefined
  password: string | undefined

  constructor(private proxy: UserAreaService) {
  }

  onSubmit() {
    this.createPassword()
  }

  onClose() {
    this.namePassword = ""
    this.password = ""
    this.StatusRequest = "Undone"
  }

  private createPassword() {
    this.proxy.createPassword$(this.namePassword!, this.password!).pipe(
      tap(() => this.StatusRequest = 'Done'),
      catchError((e) => this.StatusRequest = 'Undone'),
      handleError
    ).subscribe()
  }
}
