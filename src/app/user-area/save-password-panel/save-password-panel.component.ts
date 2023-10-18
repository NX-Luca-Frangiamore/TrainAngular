import { Component, EventEmitter, Output } from '@angular/core';
export interface UserCredentials {
  username: string
  password: string
}

@Component({
  selector: 'app-save-password-panel',
  templateUrl: './save-password-panel.component.html',
  styleUrls: ['./save-password-panel.component.scss']
})
export class SavePasswordPanelComponent {

  @Output() save = new EventEmitter<UserCredentials>()

  onSubmitClick() {
    this.save.emit({})
  }

}
