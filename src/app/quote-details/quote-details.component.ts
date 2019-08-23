import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes: Quote;
  
  constructor() { }

  ngOnInit() {
  }

}
// @Output() isComplete = new EventEmitter<boolean>();

//   quoteComplete(complete:boolean){
//     this.isComplete.emit(complete);
//   }