import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadComponent:() => import('./pages/home/home.component').then(mod=> mod.HomeComponent)},
  {path:'about', loadChildren:() => import('./pages/about/about.routes').then(mod=> mod.ABOUT_ROUTES)},
  {path:'contact', loadComponent:() => import('./pages/contact/contact.component').then(mod=> mod.ContactComponent)},
  {path:'demo', loadComponent:() => import('./pages/request-demo/request-demo.component').then(mod=> mod.RequestDemoComponent)},
  {path:'solutions', loadComponent:() => import('./pages/solutions/solutions.component').then(mod=> mod.SolutionsComponent)},
  {path:'shop', loadComponent:() => import('./pages/shop/shop.component').then(mod=> mod.ShopComponent)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
