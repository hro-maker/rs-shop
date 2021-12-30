import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { GoodServise } from './goods.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private productService: GoodServise,
    private httpClient: HttpClient
  ) { }

  getproductsIncart(ids:string[]){
   return from(ids).pipe(
     mergeMap(data=>{
          return this.productService.getProductById(data)
     }),
     map(el=>({...el,amount:1}))
   )
  }
}
