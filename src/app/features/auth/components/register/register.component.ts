
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validator } from 'src/app/core/helpers/Validator';
import { AuthService } from 'src/app/services/auth.service';
import { FormBase } from '../../../../core/FormBase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends FormBase implements OnInit {
  form=new FormGroup({
      firstName: new FormControl('',[Validator.required,Validator.MinLength(3)]),
      login: new FormControl('',[Validator.required,Validator.MinLength(5)]),
      password: new FormControl('',[Validator.required,Validator.MinLength(6)]),
      lastName: new FormControl('',[Validator.required,Validator.MinLength(3)]),
  })
  error=''
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    super()
   }
  ngOnInit(): void {
  }
  onSubmit(){
      this.validate(this.form)
  }
  get controls(){return this.form.controls}
  override FormValidated(){
      this.authService.register(this.form.value).subscribe((data) => {
        console.log(data)
            this.authService.setToken(data.token)
            this.router.navigate(['/']);
      },(err)=>{
        this.error = err.message
      })
  }
}
