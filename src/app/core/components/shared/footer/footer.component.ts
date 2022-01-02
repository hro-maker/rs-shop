import { Component, OnInit } from '@angular/core';
import { menuArr } from 'src/app/core/helpers/header';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
arr=menuArr
  constructor() { }

  ngOnInit(): void {
  }

}
