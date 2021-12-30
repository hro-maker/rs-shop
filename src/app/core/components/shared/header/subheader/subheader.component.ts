import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Igood } from 'src/app/core/interfaces/goods';
import { CategoryServise } from 'src/app/services/categoryes.service';
import { GoodServise } from '../../../../../services/goods.service';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit,AfterViewInit {
    showSearchBox=false
    showAccountbuttons=false
    goods:Igood[]=[]
    form= new FormGroup({
      search:new FormControl('')
    })
  constructor(
    private categoriesService:CategoryServise,
    private goodServise:GoodServise
    ) { }
  ngAfterViewInit(): void {
   this.SearchQuery.valueChanges.pipe(
     debounceTime(500)
   ).subscribe(el=>{
     if(el.trim().length){
      this.goodServise.fetchGoodsBySearchQuery(el).subscribe(data=>{
        this.goods=data
      })
     }else{
       this.goods=[]
     }
   })
  }
    get SearchQuery(){
      return this.form.controls['search']
    }
  ngOnInit(): void {
        this.categoriesService.categories.subscribe(data=>{

        })

  }
    setShowSearchBox(bool:boolean){
      this.showSearchBox=bool
    }
    @HostListener('window:click', ['$event'])
    click(event:any){
      if(!(event.target as any).className.includes('searchbox-item')
        && !(event.target as any).className.includes('p-inputtext')
      ){
        this.setShowSearchBox(false)
      }
      if((event.target as any).className.includes('subheader-item_4')
        || (event.target as any).className.includes('for-click')
      ){
        this.showAccountbuttons=true
      }else{
        this.showAccountbuttons=false
      }
    }
}
