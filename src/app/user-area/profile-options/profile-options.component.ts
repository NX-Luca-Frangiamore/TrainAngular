import { Component } from '@angular/core';
import { UserAreaService } from '../user-area.service';
import { Route, Router } from '@angular/router';
import { Input, Output } from '@angular/core';
import { tap } from 'rxjs'
@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent {
  nomeUtente!: string

  constructor(private proxy: UserAreaService, private router: Router) {
    proxy.getCurrentUsername$().pipe(
      tap((x) => this.nomeUtente = x)
    ).subscribe()
  }
  openMenuChange() {
    this.router.navigate(["home/changeUtente"])
  }
  deleteUtente() {
    this.proxy.deleteCurrentUser$().subscribe()
    this.router.navigate(["/"])
  }

}
