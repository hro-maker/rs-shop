import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    form=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.min(4)]),
    })
    constructor(){

    }
  ngOnInit(): void {

  }
    onSubmit( ){
          console.log(this.form.value)
    }
    get email(){
      return this.form.get('email') as any
    }
}
