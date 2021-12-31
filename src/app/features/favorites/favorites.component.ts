import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Igood } from 'src/app/core/interfaces/goods';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodServise } from 'src/app/services/goods.service';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  products:Igood[]=[]
  heart=faHeart
  constructor(
    private cartService: CartService,
    private authService:AuthService,
    private productService:GoodServise,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(data=>{
      if(data){
        this.cartService.getproductsInfavorites(data.favorites).subscribe(data=>{
               this.products.push(data)
        })
      }
 })
  }

  addFavorite(id:string){
    if(this.authService.hasToken()){
        this.productService.deleteFavorites(id).subscribe(_=>{
            this.products=this.products.filter(el=>el.id !== id)
            this.messageService.add({severity:'success', summary:'favorites', detail:'removed from favorites'});
        },(e)=>{
          this.messageService.add({severity:'error', summary:'favorites', detail:`failure ${e.statusText}`});
        })
    }else{
      this.messageService.add({severity:'error', summary:'favorites', detail:`failure `});
    }
}
}
