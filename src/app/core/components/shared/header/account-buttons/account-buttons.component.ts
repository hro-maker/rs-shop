import { Component, OnInit } from '@angular/core';
import { faBars, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Iuser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-account-buttons',
  templateUrl: './account-buttons.component.html',
  styleUrls: ['./account-buttons.component.scss']
})
export class AccountButtonsComponent implements OnInit {
userInfo:Iuser | null =null
signOut=faSignOutAlt
cart=faShoppingCart
bars=faBars
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(data=>{
            this.userInfo=data
    })
  }
  logOut(){
      this.authService.removeToken()
      this.authService.userInfo.next(null)
  }

}
