import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { FavouriteService } from '../services/favourite/favourite.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  food!:Food;

  constructor(private activatedRoute:ActivatedRoute,private foodservice:FoodService,private cartService:CartService,private router:Router,private favouriteService:FavouriteService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.food=foodservice.getFoodById(params['id']);
        this.food=favouriteService.getFoodByFavourite(params['id']);
    })
  }

  ngOnInit(): void {
      
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  addToFavourite(){
    this.cartService.addToFavourite(this.food);
    this.router.navigateByUrl('/favourite-page')
  }
}
