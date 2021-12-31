import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from '../../services/cart.service';
import { Igood } from 'src/app/core/interfaces/goods';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { GoodServise } from '../../services/goods.service';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBase } from '../../core/FormBase';
import { Validator } from 'src/app/core/helpers/Validator';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends FormBase implements OnInit {
  products:Igood[]=[]
  items:any[]=[]
  trashIcon= faTrash
  activeIndex: number = 1;
  form: FormGroup=new FormGroup({
    "name": new FormControl('',[Validator.required,Validator.minLength(4)]),
    "address": new FormControl('',[Validator.required,Validator.minLength(4)]),
    "phone":new FormControl(0,[Validator.required,Validator.minLength(8)]),
    "timeToDeliver": new FormControl(new Date()),
    "comment":new FormControl('')
  })
  constructor(
    private cartService: CartService,
    private authService:AuthService,
    private productService:GoodServise,
    private messageService: MessageService,
  ) {
    super()
  }

  ngOnInit(): void {
        this.authService.userInfo.subscribe(data=>{
             if(data){
               this.cartService.getproductsIncart(data.cart).subscribe(data=>{
                      this.products.push(data)
               })
             }
        })
        this.items = [{
          label: 'Cart items',
          command: (event: any) => {
              this.activeIndex = 1;
              this.messageService.add({severity:'info', summary:'Cart items', detail: event.item.label});
          }
      },
      {
          label: 'Delivery information',
          command: (event: any) => {
              this.activeIndex = 2;
              this.messageService.add({severity:'info', summary:'Delivery information', detail: event.item.label});
          }
      }
  ];
  }
  errorHandler(event:any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
  onSubmit(){
    const result=this.products.filter(el=>el.amount > 0).map(elem=>({
      id:elem.id,
      amount:elem.amount
    }))
    const order={
      items:result,
      details:this.form.value
    }
    this.cartService.makeOrder(order).subscribe(result=>{
      this.products=[]
      this.messageService.add({severity:'success', summary:'Order', detail: 'Order created'});
    },(e)=>{
      this.messageService.add({severity:'error', summary:'Order', detail: 'failure '+e.message});

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
