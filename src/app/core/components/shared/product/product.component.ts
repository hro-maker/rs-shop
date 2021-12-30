import { Component, OnInit, Input } from '@angular/core';
import { faQuestionCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { MessageService } from 'primeng/api';
import { Igood } from 'src/app/core/interfaces/goods';
import { AuthService } from 'src/app/services/auth.service';
import { GoodServise } from '../../../../services/goods.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  star=faStar
  starsArr:number[]=[]
    @Input('product')product!:Igood
    placeholdericon=faQuestionCircle
    cardBgcolor='green'
  constructor(
    private authService: AuthService,
    private productservice: GoodServise,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
   this.starsArr=Array.from({length:this.product.rating},(_,i)=>i)
    const quantity=this.product.availableAmount
      if(quantity > 4 && quantity<20){
        this.cardBgcolor='yellow'
      }
      if(quantity <5){
        this.cardBgcolor='red'
      }
  }
  errorHandler(event:any) {
    console.debug(event);
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
 addToCart(id:string,isInCart:boolean){
  if(this.authService.hasToken() && !isInCart){
    this.productservice.addTocart(id).subscribe(_=>{
    this.authService.getuserInfo()
    if(this.product){
      this.product={...this.product,isInCart:true}
    }
    this.messageService.add({severity:'success', summary:'Cart', detail:'added to Cart'});
    },(e)=>{
      this.messageService.add({severity:'error', summary:'Cart', detail:`failure ${e.statusText}`});
    })
}else{
  this.messageService.add({severity:'error', summary:'Cart', detail:`action failure`});
}
 }
}
