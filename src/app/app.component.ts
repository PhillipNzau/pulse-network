import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuOpen:boolean = false;

  title = 'pulse-network';

  loggedIn:boolean = true;
  currentUrl:string = ''

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.checkIfIsLogIn()
    console.log('Active route segment:', this.loggedIn);
  }

  checkIfIsLogIn() {
    this.currentUrl = location.pathname.split('/')[1]
    this.currentUrl == 'auth' ? this.loggedIn = false : this.loggedIn = true

  }
}
