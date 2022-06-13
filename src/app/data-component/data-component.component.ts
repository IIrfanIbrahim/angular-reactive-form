import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { DataCard } from './data.interface';


@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent {

  @Input() 
  dataCard! : DataCard;

  @Output() 
  likeClicked = new EventEmitter<number>();

  ngOnInit(): void {
  }

  countLike() {
    this.likeClicked.emit(this.dataCard.like++);
  }
  

 

}


