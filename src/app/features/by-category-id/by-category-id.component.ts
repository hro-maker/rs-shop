import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Igood } from 'src/app/core/interfaces/goods';
import { GoodServise } from '../../services/goods.service';

@Component({
  selector: 'app-by-category-id',
  templateUrl: './by-category-id.component.html',
  styleUrls: ['./by-category-id.component.scss'],
})
export class ByCategoryIdComponent implements OnInit, AfterViewInit {
  @ViewChild('intercept', { static: true }) intercept!: ElementRef;
  goods: Igood[] = [];
  historyArr:string[]=[]
  constructor(
    private activeRouter: ActivatedRoute,
    private goodServise: GoodServise,
    private router: Router
  ) {}
  get loading(){
    return this.goodServise.bycategoryid.loading
  }
  ngAfterViewInit(): void {
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (
        entries[0].isIntersecting &&
        !this.goodServise.bycategoryid.isFinished
      ) {
        this.fetchGoods();
      }
    };
    const observer = new IntersectionObserver(callback);
    observer.observe(this.intercept.nativeElement);
  }
  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if ((data as any).routerEvent) {
        this.goodServise.resetInfo();
        this.goods = [];
      }
    });
  }
  get id(){
    return  (this.activeRouter.snapshot.params as {id:string}).id
  }
  get subid(){
    return  (this.activeRouter.snapshot.params as {subid:string}).subid
  }

  fetchGoods() {
    const { id, subid } = this.activeRouter.snapshot.params;
    if (subid) {
      this.goodServise.fetchGoodsBySubCategoryId(id, subid).subscribe(
        (data) => {
          this.goods.push(...data);
        },
        (err) => {
          console.log(err.message);
        }
      );
    } else {
      this.goodServise.fetchGoodsByCategoryId(id).subscribe(
        (data) => {
          this.goods.push(...data);
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
  }
}
