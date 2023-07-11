import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isSignUp:boolean = false;
  show:boolean = false;
  login:boolean = false;

  togglePwd() {
    this.show = !this.show
  }

  toggleAcc() {
    this.login = !this.login
  }
}
