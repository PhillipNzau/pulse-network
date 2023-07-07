import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  homeTop = '../../../../assets/imgs/home-top.png'
  aboutCsTop = '../../../../assets/imgs/about-cs-top.png'
  aboutIrTop = '../../../../assets/imgs/about-ir-top.png'
  aboutTop = '../../../../assets/imgs/about-top.png'
  shopTop = '../../../../assets/imgs/shop-top.png'

  topBar:string = this.homeTop

  aboutUs = [
    {
      title: 'company',
      route: ''
    },
      {
      title: 'case studies',
      route: ''
    },
    
      {
      title: 'investor relations',
      route: ''
    },
  ]

}
