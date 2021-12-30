import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private router: Router,
    private messageService: MessageService,
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
      this.authService.login(this.form.value).subscribe((data) => {
            this.authService.setToken(data.token)
            this.authService.getuserInfo()
            this.router.navigate(['/']);
      },(err)=>{
        this.messageService.add({severity:'error', summary:'login', detail:`error ${err.statusText}`});
      })
  }
}
