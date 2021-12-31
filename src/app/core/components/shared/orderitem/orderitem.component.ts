import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from 'src/app/core/helpers/Validator';
import { details } from '../../../interfaces/user';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.scss']
})
export class OrderitemComponent implements OnInit {
  @Output('onSubmit')onSubmit:EventEmitter<details> =new EventEmitter()
  @Input('initialValues')initialValues?:details
  @Input('btnLabel')btnLabel!:string
  form!: FormGroup
  constructor() { }
  onsubmit(){
    this.onSubmit.emit(this.form.value)
  }
  ngOnInit(): void {
    this.form =new FormGroup({
      "name": new FormControl(this?.initialValues?.name || '',[Validator.required,Validator.minLength(4)]),
      "address": new FormControl(this?.initialValues?.address || '',[Validator.required,Validator.minLength(4)]),
      "phone":new FormControl(this?.initialValues?.phone?.replace(/[-]/g,'') || 0,[Validator.required,Validator.minLength(8)]),
      "timeToDeliver": new FormControl(
        this?.initialValues?.timeToDeliver
        ? new Date(this.initialValues.timeToDeliver)
        : new Date()),
      "comment":new FormControl(this?.initialValues?.comment || '')
    })

  }

}
