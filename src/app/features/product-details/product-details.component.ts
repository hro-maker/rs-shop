import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Igood } from 'src/app/core/interfaces/goods';
import { GoodServise } from '../../services/goods.service';
import { responsiveOptions } from './helper';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  src=''
  loading=false
  product:Igood | null=null
  images:any[]=[]
  responsiveOptions=responsiveOptions
  constructor(
    private activeRouter: ActivatedRoute,
    private goodsService:GoodServise) { }
  onClick(src:string){
      this.src=src
  }
  errorHandler(event:any) {
    console.debug(event);
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
  ngOnInit() {
    this.loading=true;
    const {id} =this.activeRouter.snapshot.params
    this.goodsService.getProductById(id).subscribe(data=>{

        this.images=data.imageUrls
        console.log(this.images)
          this.product=data;
          this.loading=false
    },()=>{
      console.log('error')
    })
  }

}
