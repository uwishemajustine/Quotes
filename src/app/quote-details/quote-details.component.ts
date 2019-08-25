import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  expanded: boolean = false;
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

votequote = 0;
vote= true;

voteshow(){
  this.vote = true;
  return this.votequote = this.votequote +1;
}

downvotequote = 0;
downvote = true;

downvoteshow(){
  this.downvote = true;
  return this.downvotequote  = this.downvotequote + 1;
}

  constructor() { }

  ngOnInit() {
  }

}