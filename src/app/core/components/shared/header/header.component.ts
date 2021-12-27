import { Component, HostListener, OnInit } from '@angular/core';

import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { CategoryServise } from '../../../../services/categoryes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    viber =faViber
    clock=faClock
    showMenu=false
  constructor(private categoriesService:CategoryServise) { }
  @HostListener('window:click', ['$event'])
  handleKeyDown(event:MouseEvent) {
    if((event.target as any).className.includes('links-item-3')){
      this.setShowMenu(true)
    }else{
      this.setShowMenu(false)
    }
  }
      ngOnInit(): void {
        this.categoriesService.fetchCategories()
      }
    setShowMenu(bool:boolean){
        this.showMenu=bool;
    }
}
