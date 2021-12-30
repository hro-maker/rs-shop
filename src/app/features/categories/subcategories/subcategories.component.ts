import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Icategory } from '../../../core/interfaces/category';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit,AfterViewInit {
  @Input('categories') categories!:Icategory[]
  @Input('categoryId') categoryId!:string
  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
