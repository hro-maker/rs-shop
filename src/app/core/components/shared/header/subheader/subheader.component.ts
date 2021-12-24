import { Component, OnInit } from '@angular/core';
import { CategoryServise } from 'src/app/services/categoryes.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {

  constructor(private categoriesService:CategoryServise) { }

  ngOnInit(): void {
        this.categoriesService.categories.subscribe(data=>{
          console.log(data)
        })
  }

}
