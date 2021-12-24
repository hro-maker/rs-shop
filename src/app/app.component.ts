import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryServise } from './services/categoryes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    form=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.min(4)]),
    })
    constructor(private categoriesService:CategoryServise){

    }
  ngOnInit(): void {
    this.categoriesService.fetchCategories()
  }
    onSubmit( ){
          console.log(this.form.value)
    }
    get email(){
      return this.form.get('email') as any
    }
}
