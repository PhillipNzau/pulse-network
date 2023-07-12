import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() myMenu = new EventEmitter();
  @Output() loginUser = new EventEmitter();

  homeTop = '../../../../assets/imgs/home-top.png'
  aboutCsTop = '../../../../assets/imgs/about-cs-top.png'
  aboutIrTop = '../../../../assets/imgs/about-ir-top.png'
  aboutTop = '../../../../assets/imgs/about-top.png'
  shopTop = '../../../../assets/imgs/shop-top.png'

  topBar:string = this.homeTop
  isMenuOpen = false;

  aboutUs = [
    {
      title: 'company',
      route: '',
      banner: 'aboutTop'
    },
      {
      title: 'case studies',
      route: 'case-study',
      banner: 'aboutCsTop'
    },
    
      {
      title: 'investor relations',
      route: 'investor-relations',
      banner: 'aboutIrTop'
    },
  ]

  toggleMenu() {
   this.isMenuOpen = !this.isMenuOpen;
   this.myMenu.emit();
  }

  toggleLogin() {
    this.loginUser.emit()
  }
}
