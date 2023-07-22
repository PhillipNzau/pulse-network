import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pulse-network';

  loggedIn:boolean = true;
  currentUrl:string = ''

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.checkIfIsLogIn()
  }

  checkIfIsLogIn() {
    this.currentUrl = location.pathname.split('/')[1]
    this.currentUrl == 'auth' ? this.loggedIn = false : this.loggedIn = true

  }
}
