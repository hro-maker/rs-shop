import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodServise } from 'src/app/services/goods.service';
import { Igood } from '../../core/interfaces/goods';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products:Igood[] = []
  playInterval=3000
  constructor(
    private cartService: CartService,
    private authService:AuthService,
    private productService:GoodServise,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(data=>{
        Object.values(data).forEach(arrs=>{
             this.products=this.products
             .concat(...Object.values(arrs))
             .sort((a,b)=>  b.rating - a.rating).slice(0,12)
        })
      })
  }
  onchanege(a:any){

      this.playInterval=+a.target.value
      console.log(this.playInterval)
  }
  errorHandler(event:any) {
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
}
