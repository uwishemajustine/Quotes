import { Component, OnInit } from '@angular/core';
import {  Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
    quote:Quote = [
    {id:1, quote:' A man who dares to waste one hour of time has not discovered the value of life', author:'Charles Darwin', publisher:'William Shakespeare'},
    {id:2, quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style', author:'Maya Angelou ', publisher:'C. J. Cherryh'},
    {id:3, quote:'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', author:'Helen Keller', publisher:'Robert Benchley'},
    {id:4, quote: 'Those who truly want something will keep trying until they die', author:'Maxime Lagacé', publisher:'Andrew Rohrer'},
    {id:5, quote: 'Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.', author:'Norman Vincent Peale', publisher:'Ernest Hemingway'},
    {id:6, quote: 'You just can’t beat the person who never gives up.', author:'Babe Ruth', publisher:'Jessica Valenti'},
    {id:7, quote: 'Work while they sleep. Learn while they party. Save while they spend. Live like they dream', author:'Syed Balkhi', publisher:'Neil Gaiman'},
    ];
    
    constructor() { }

  ngOnInit() {
  }

}
