import { Component, Input, OnInit } from '@angular/core';
import { GoodServise } from '../../../../../services/goods.service';
import { Igood } from '../../../../interfaces/goods';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
    @Input('goods')goods!:Igood[]
  constructor(private goodServise:GoodServise) { }

  get loading(){
    return this.goodServise.loading;
  }
  ngOnInit(): void {
  }

}
