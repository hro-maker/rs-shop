import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodServise } from 'src/app/services/goods.service';
import { details } from '../../core/interfaces/user';
interface orderitem{
  id:string,
  items:{id:string,amount:number}[],
  details:details
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    orders:orderitem[]=[]
    trash=faTrash
  constructor(
    private cartService: CartService,
    private authService:AuthService,
    private productService:GoodServise,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(data=>{
      if(data){
        this.orders=data.orders
      }
 })
  }
  deleteItem(id:string){
    this.cartService.DeleteOrder(id).subscribe(result=>{
      this.messageService.add({severity:'success', summary:'Order', detail: 'Order deleted Successfully'});
     this.orders= this.orders.filter(el=>el.id !== id)
    },(e)=>{
      this.messageService.add({severity:'error', summary:'Order', detail: 'failure '+e.message});

    })
  }
  onSubmit(value:any,id:string){
   const order={
     id,
     details:value
   }
    this.cartService.editOrder(order).subscribe(result=>{
      this.messageService.add({severity:'success', summary:'Order', detail: 'Order edited Successfully'});
    },(e)=>{
      this.messageService.add({severity:'error', summary:'Order', detail: 'failure '+e.message});

    })
  }

}
