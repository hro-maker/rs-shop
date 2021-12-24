import { Component, OnInit } from '@angular/core';
import { CategoryServise } from '../../../../../services/categoryes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService:CategoryServise) { }

  ngOnInit(): void {
  }
  get categories(){
    return this.categoriesService.categories
  }
}
