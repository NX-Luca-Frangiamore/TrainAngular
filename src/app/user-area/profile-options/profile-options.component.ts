import { Component } from '@angular/core';
import { UserAreaService } from '../user-area.service';
import { Route, Router } from '@angular/router';
import { Input, Output } from '@angular/core';
import { tap } from 'rxjs';
import { Result } from 'src/app/infrastructure/DTOs/result';
@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss'],
})
export class ProfileOptionsComponent {
  nomeUtente!: string;

  constructor(
    private proxy: UserAreaService,
    private router: Router,
  ) {
    proxy
      .getCurrentUsername$()
      .pipe(
        tap((x: Result) => {
          if (x.isSuccess) this.nomeUtente = x.result.usernameUtente;
          else {
            alert(x.errorMessage);
            this.router.navigate(['/']);
          }
        }),
      )
      .subscribe();
  }
  openMenuChange() {
    this.router.navigate(['home/changeUtente']);
  }
  deleteUtente() {
    this.proxy
      .deleteCurrentUser$()
      .pipe(
        tap((x: Result) => {
          if (!x.isSuccess) alert(x.errorMessage);
        }),
      )
      .subscribe();
    this.router.navigate(['/']);
  }
  logOut() {
    this.router.navigate(['/']);
  }
}
