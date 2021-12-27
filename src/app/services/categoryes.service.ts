import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Icategory } from "../core/interfaces/category";
import { BehaviorSubject, Observable } from "rxjs";
import { baseUrl } from '../core/constants/url';

@Injectable({providedIn: 'root'})
export class CategoryServise {
  categories:BehaviorSubject<Icategory[]>=new BehaviorSubject([] as Icategory[])
  constructor(private httpClient: HttpClient) { }
  fetchCategories(){
       this.httpClient.get<Icategory[]>(baseUrl+'/categories').subscribe(data=>{
            this.categories.next(data)
       })
  }

}
