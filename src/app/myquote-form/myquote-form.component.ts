import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-myquote-form',
  templateUrl: './myquote-form.component.html',
  styleUrls: ['./myquote-form.component.css']
})
export class MyquoteFormComponent implements OnInit {

  newQuote = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addQuote.emit(this.newQuote);
      }

  constructor() { }

  ngOnInit() {
  }

}
