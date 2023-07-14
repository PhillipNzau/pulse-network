import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
    selector: 'app-page',
    standalone:true,
    templateUrl:'./page.component.html',
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent]
})
export class PageComponent {
    isMenuOpen:boolean = false;

}