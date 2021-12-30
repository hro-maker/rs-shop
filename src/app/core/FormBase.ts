import { FormGroup } from "@angular/forms";


export class FormBase {
  constructor(){
  }
  validate(form:FormGroup){
          if(form.valid){
            console.log("form is valid")
            this.FormValidated()
          }else{
            Object.keys(form).forEach(field => {
              const control=form.get(field)
              control?.markAsTouched({ onlySelf: true });
            })
          }
  }
   FormValidated(){
    throw new Error("method don't implemented")
  }
}
