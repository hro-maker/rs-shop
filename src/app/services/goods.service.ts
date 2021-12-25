import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { baseUrl } from '../core/constants/url';
import { Igood } from "../core/interfaces/goods";

@Injectable({providedIn: 'root'})
export class GoodServise {
  loading = false;
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
}
