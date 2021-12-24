import { Component, OnInit } from '@angular/core';
import { menuArr } from '../../../helpers/header';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    links=menuArr
  constructor() { }

  ngOnInit(): void {
  }

}
