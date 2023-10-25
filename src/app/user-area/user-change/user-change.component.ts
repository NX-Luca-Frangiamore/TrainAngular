import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { UserAreaService } from '../user-area.service';
import { Router } from '@angular/router';
import { Result } from 'src/app/infrastructure/DTOs/result';
import { tap } from 'rxjs';
@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss'],
})
export class UserChangeComponent {
  newUsername?: string;
  newPassword?: string;
  constructor(
    private service: UserAreaService,
    private router: Router,
  ) {}
  async changeUtente() {
    await this.service
      .changeCurrentUser$(this.newUsername!, this.newPassword!)
      .pipe(
        tap((x: Result) => {
          if (x.isSuccess) this.router.navigate(['home']);
          else {
            alert(x.errorMessage);
          }
        }),
      )
      .subscribe();
  }
}
