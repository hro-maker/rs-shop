import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from '../../services/cart.service';
import { Igood } from 'src/app/core/interfaces/goods';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GoodServise } from '../../services/goods.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:Igood[]=[]
  m={}
  trashIcon= faTrash
  constructor(
    private cartService: CartService,
    private authService:AuthService,
    private productService:GoodServise,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
        this.authService.userInfo.subscribe(data=>{
             if(data){
               this.cartService.getproductsIncart(data.cart).subscribe(data=>{
                      this.products.push(data)
                      console.log(data)
               })
             }
        })
  }
  errorHandler(event:any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
  changeEvent(e:{value:number},id:string){
     this.products= this.products.map(data=>{
       return data.id === id ?  {...data,amount:e.value} :data
     })
  }
  deleteFromCart(id:string){
      this.productService.deleteFromCart(id).subscribe(data=>{
          this.products=this.products.filter(data=>data.id !== id)
          this.messageService.add({severity:'success', summary:'Cart item', detail:`Cart item Deleted`});
      },(e)=>{
        this.messageService.add({severity:'error', summary:'Cart item', detail:`error`});
      })
  }
}
