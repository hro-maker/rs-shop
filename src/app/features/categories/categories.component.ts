import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoryServise } from 'src/app/services/categoryes.service';
import { Icategory } from '../../core/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    subcategoryId=""
  constructor(private categoryServise:CategoryServise) { }

  ngOnInit(): void {
  }
    get categories(){
        return this.categoryServise.categories
    }
    setcategoryId(id:string){
          this.subcategoryId=id
    }
}
