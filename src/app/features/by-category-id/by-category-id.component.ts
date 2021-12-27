import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Igood } from 'src/app/core/interfaces/goods';
import { GoodServise } from '../../services/goods.service';

@Component({
  selector: 'app-by-category-id',
  templateUrl: './by-category-id.component.html',
  styleUrls: ['./by-category-id.component.scss']
})
export class ByCategoryIdComponent implements OnInit {
  goods:Igood[]=[]
  constructor(private router:ActivatedRoute,private goodServise:GoodServise) { }

  ngOnInit(): void {
    const {id} =this.router.snapshot.params
    this.goodServise.fetchGoodsByCategoryId(id).subscribe(data=>{
          console.log(data)
    },(err)=>{
          console.log(err.message)
    })
  }

}
