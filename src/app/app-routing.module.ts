import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import {HomeComponent} from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { FavouritePageComponent } from './favourite-page/favourite-page.component';
import { UserloginComponent } from './userlogin/userlogin.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodpageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'favourite-page',component:FavouritePageComponent},
  {path:'userlogin-page',component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }