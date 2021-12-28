import { Component, OnInit, Input } from '@angular/core';
import { faQuestionCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { Igood } from 'src/app/core/interfaces/goods';

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
  constructor() { }

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
}
