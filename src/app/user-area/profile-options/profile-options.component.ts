import { Component } from '@angular/core';
import { UserAreaService } from '../user-area.service';
import { Route, Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent {
  @Input() nomeUtente!: string


  menuChange = false
  constructor(private proxy:UserAreaService, private router: Router) { }
  openMenuChange() {
    this.router.navigate(["home/changeUtente"])
  }
  deleteUtente() {
    this.proxy.deleteUtente()
    this.router.navigate(["/"])
  }
}
