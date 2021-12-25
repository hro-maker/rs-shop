import { Component, HostListener, OnInit } from '@angular/core';

import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    viber =faViber
    clock=faClock
    showMenu=false
  constructor() { }
  @HostListener('window:click', ['$event'])
  handleKeyDown(event:MouseEvent) {
    if((event.target as any).className.includes('links-item-3')){
      this.setShowMenu(true)
    }else{
      this.setShowMenu(false)
    }
  }
      ngOnInit(): void {
      }
    setShowMenu(bool:boolean){
        this.showMenu=bool;
    }
}
