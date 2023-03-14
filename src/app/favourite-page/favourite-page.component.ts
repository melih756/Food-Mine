import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-favourite-page',
  templateUrl: './favourite-page.component.html',
  styleUrls: ['./favourite-page.component.css']
})
export class FavouritePageComponent {
  cart!:Cart;
  constructor(private cartService:CartService) {
    
    this.setCart();
  }
 
  ngOnInit(): void {
      
  }
  removeFromFavourite(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  
}
