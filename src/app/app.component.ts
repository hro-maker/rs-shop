import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CategoryServise } from './services/categoryes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(
      private authService: AuthService
      ){
    }
  ngOnInit(): void {
      this.authService.getuserInfo()
  }

}
