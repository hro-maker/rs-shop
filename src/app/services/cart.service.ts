import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { baseUrl } from '../core/constants/url';
import { details } from '../core/interfaces/user';
import { GoodServise } from './goods.service';
const params=new HttpParams({})
interface data{
  "items": {
    "id": string,
    "amount": number
  }[],
  "details": details
}
interface editOrder{
  id:string,
  details:details
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
  getproductsInfavorites(ids:string[]){
    return from(ids).pipe(
      mergeMap(data=>{
           return this.productService.getProductById(data)
      })
    )
   }
  makeOrder(data:data){
      return this.httpClient.post(`${baseUrl}/users/order`,data)
  }
  editOrder(data:editOrder){
      return this.httpClient.put(`${baseUrl}/users/order`,data)
  }
  DeleteOrder(id:string){
      return this.httpClient.delete(`${baseUrl}/users/order`,{
        params:params.append('id',id)
      })
  }
}
