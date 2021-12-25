import { Component, Input, OnInit } from '@angular/core';
import { Icategory } from '../../../core/interfaces/category';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
  @Input('categories') categories!:Icategory[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.categories)
  }

}
