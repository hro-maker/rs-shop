import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validator } from 'src/app/core/helpers/Validator';
import { AuthService } from 'src/app/services/auth.service';
import { FormBase } from '../../../../core/FormBase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormBase implements OnInit {
  form=new FormGroup({
      login: new FormControl('',[Validator.required,Validator.MinLength(5)]),
      password: new FormControl('',[Validator.required,Validator.MinLength(6)]),
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
    console.log(this.form.value)
      this.authService.login(this.form.value).subscribe((data) => {
            this.authService.setToken(data.token)
            this.authService.getuserInfo()
            this.router.navigate(['/']);
      },(err)=>{
        this.error = err.message
        setTimeout(() => {
          this.error=''
        })
      })
  }
}
