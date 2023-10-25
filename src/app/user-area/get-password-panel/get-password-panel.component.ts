import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Password } from 'src/app/infrastructure/Domain/password';
import { UserAreaService } from '../user-area.service';
import { tap } from 'rxjs';
import { Result } from 'src/app/infrastructure/DTOs/result';
@Component({
  selector: 'app-get-password-panel',
  templateUrl: './get-password-panel.component.html',
  styleUrls: ['./get-password-panel.component.scss'],
})
export class GetPasswordPanelComponent {
  password?: Password;
  namePassword?: string;
  constructor(private proxy: UserAreaService) {}

  async getPassword() {
    this.proxy
      .getPassword$(this.namePassword!)
      .pipe(
        tap((x: Result) => {
          if (x.isSuccess) this.password = x.result;
        }),
      )
      .subscribe();
  }
  cleanField() {
    this.namePassword = undefined;
    this.password = undefined;
  }
}
