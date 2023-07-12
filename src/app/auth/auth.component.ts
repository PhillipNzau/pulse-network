import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @Output() loginUser = new EventEmitter();

  isSignUp:boolean = false;
  show:boolean = false;
  login:boolean = false;

  constructor(private route: Router) {}
  togglePwd() {
    this.show = !this.show
  }

  toggleAcc() {
    this.login = !this.login
  }
  toggleLogin() {
    this.route.navigate([''])
    this.loginUser.emit()
  }
}
