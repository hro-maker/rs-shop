
import { AbstractControl, Validators } from '@angular/forms';

export class Validator extends Validators{
  constructor(){
    super()
  }
  static emailValidator(control: AbstractControl): any {
    let error = { "email": true };
    var value = control.value;

    if (value) {
        var pattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
        if (!pattern.test(value)) {
            return error;
        }
    }
    return null;
}
static MinLength(num:number){
  let error = { "min": true };
  return (control:AbstractControl)=>{
    if (control.value.trim().length < num){
      return error
    }
    return null
  }
}
}
