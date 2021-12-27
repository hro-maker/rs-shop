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
    this.bycategoryid.start+=1
      return new Observable<Igood[]>((observer)=>{
           if(!this.bycategoryid.isFinished){
            this.httpClient.get<Igood[]>(url,{
              params:params.appendAll({
              start:this.bycategoryid.start,
              count:10
            })}
            ).subscribe((data)=>{
                    if(!data.length){
                          this.bycategoryid.isFinished=true
                     }
                  observer.next(data)
            })
           }
      })
  }
  fetchGoodsByCategoryId(id:string){
    return this.makefetchQuery(`${baseUrl}/goods/category/${id}`)
  }
  fetchGoodsBySubCategoryId(id:string,subid:string){
    return  this.makefetchQuery(`${baseUrl}/goods/category/${id}/${subid}`)
  }
}
