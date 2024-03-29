import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
// import Swiper and modules styles

register();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
