import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
@Input('src')src!:string
@Output('onClick')onClick:EventEmitter<string>=new EventEmitter
  constructor() { }
  errorHandler(event:any) {
    console.debug(event);
    event.target.src = "https://cdn.browshot.com/static/images/not-found.png";
 }
  ngOnInit(): void {
  }
  onClickk(){
      this.onClick.emit('')
  }
}
