import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { baseUrl } from '../core/constants/url';
import { GoodServise } from './goods.service';
interface data{
  "items": {
    "id": string,
    "amount": number
  }[],
  "details": {
    "name":string,
    "address": string,
    "phone": string,
    "timeToDeliver": string,
    "comment":string
  }
}
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
  makeOrder(data:data){
      return this.httpClient.post(`${baseUrl}/users/order`,data)
  }
}
