import { Route } from "@angular/router";
import { PageComponent } from "./page.component";

export const PAGES_ROUTES:Route[] = [
    {
        path: '', component: PageComponent, 
        children: [
            {path:'', loadComponent:() => import('./home/home.component').then(mod=> mod.HomeComponent)},
            {path:'about', loadChildren:() => import('./about/about.routes').then(mod=> mod.ABOUT_ROUTES)},
            {path:'contact', loadComponent:() => import('./contact/contact.component').then(mod=> mod.ContactComponent)},
            {path:'demo', loadComponent:() => import('./request-demo/request-demo.component').then(mod=> mod.RequestDemoComponent)},
            {path:'solutions', loadComponent:() => import('./solutions/solutions.component').then(mod=> mod.SolutionsComponent)},
            {path:'shop', loadComponent:() => import('./shop/shop.component').then(mod=> mod.ShopComponent)},
    ]}
]