import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
import { Igood } from 'src/app/core/interfaces/goods';
import { AuthService } from 'src/app/services/auth.service';
import { GoodServise } from '../../services/goods.service';
import { responsiveOptions } from './helper';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  heart=faHeart
  starsArr:number[]=[]
  star=faStar
  src=''
  loading=false
  product:Igood | null=null
  images:any[]=[]
  responsiveOptions=responsiveOptions
  constructor(
    private messageService: MessageService,
    private activeRouter: ActivatedRoute,
    private goodsService:GoodServise,
    private authService:AuthService
    ) { }
  onClick(src:string){
      this.src=src
  }
  errorHandler(event:any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
 addFavorite(id:string,isFavorite:boolean){
      if(this.authService.hasToken()){
        if(isFavorite){
          this.goodsService.deleteFavorites(id).subscribe(_=>{
            this.authService.getuserInfo()
            if(this.product){
              this.product={...this.product,isFavorite:false}
              this.messageService.add({severity:'success', summary:'favorites', detail:'removed from favorites'});
            }

          },(e)=>{
            this.messageService.add({severity:'error', summary:'favorites', detail:`failure ${e.statusText}`});
          })
      }else{
        this.goodsService.addFavorites(id).subscribe(_=>{
          this.authService.getuserInfo()
          if(this.product){
            this.product={...this.product,isFavorite:true}
            this.messageService.add({severity:'success', summary:'favorites', detail:'added to favorites'});
          }

        },(e)=>{
          this.messageService.add({severity:'error', summary:'favorites', detail:`failure ${e.statusText}`});
        })
      }
      }else{
        this.messageService.add({severity:'error', summary:'favorites', detail:`failure `});
      }
 }
 addToCart(id:string,isInCart:boolean){
  if(this.authService.hasToken() && !isInCart){
      this.goodsService.addTocart(id).subscribe(_=>{
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
  ngOnInit() {
    this.loading=true;
    const {id} =this.activeRouter.snapshot.params
    this.goodsService.getProductById(id).subscribe(data=>{
      this.starsArr=Array.from({length:data.rating},(_,i)=>i)
        this.images=data.imageUrls
          this.product=data;
          this.loading=false
    },()=>{
      console.log('error')
    })
  }

}
