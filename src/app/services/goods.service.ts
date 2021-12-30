import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { baseUrl } from '../core/constants/url';
import { Igood } from "../core/interfaces/goods";
const params=new HttpParams({})
@Injectable({providedIn: 'root'})
export class GoodServise {
  loading = false;
  bycategoryid={
    loading:false,
    isFinished:false,
    start:-1,
  }
  constructor(private httpClient: HttpClient) { }
  resetInfo(){
    this.bycategoryid={
      loading:false,
      isFinished:false,
      start:-1,
    }
  }
  fetchGoodsBySearchQuery(txt:string):Observable<Igood[]>{
    this.loading=true
       return new Observable<Igood[]>((observer)=>{
        this.httpClient.get<Igood[]>(`${baseUrl}/goods/search?text=${txt}`).subscribe(data=>{
          this.loading=false
          observer.next(data)
        },(err)=>{
          console.log("search good error",err.message)
        })
       })
  }
  makefetchQuery(url:string){

    this.bycategoryid={
      ...this.bycategoryid,
      start:this.bycategoryid.start+1,
      loading:true,
    }
      return new Observable<Igood[]>((observer)=>{
           if(!this.bycategoryid.isFinished){
            this.httpClient.get<Igood[]>(url,{
              params:params.appendAll({
              start:this.bycategoryid.start * 20,
              count:20
            })}
            ).subscribe((data)=>{
                    if(!data.length){
                          this.bycategoryid.isFinished=true
                     }
                  observer.next(data)
                  this.bycategoryid.loading=false;
            })
           }else{
            this.bycategoryid.loading=false;
           }
      })
  }
  fetchGoodsByCategoryId(id:string){
    return this.makefetchQuery(`${baseUrl}/goods/category/${id}`)
  }
  fetchGoodsBySubCategoryId(id:string,subid:string){
    return  this.makefetchQuery(`${baseUrl}/goods/category/${id}/${subid}`)
  }
  getProductById(id:string):Observable<Igood>{
    return this.httpClient.get<Igood>(`${baseUrl}/goods/item/${id}`)
  }
  addTocart(id:string){
  return this.httpClient.post(`${baseUrl}/users/cart`,{id})
  }
  deleteFromCart(id:string){
  return this.httpClient.delete(`${baseUrl}/users/cart`,{
    params:params.append('id',id)
  })
  }
  addFavorites(id:string){
    return this.httpClient.post(`${baseUrl}/users/favorites`,{id})
  }
  deleteFavorites(id:string){
    return this.httpClient.delete(`${baseUrl}/users/favorites`,{
      params:params.append('id',id)
    })
  }
}
