import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quote:Quote[]  = [
         new Quote (1, 'A man who dares to waste one hour of time has not discovered the value of life', 'Charles Darwin', 'William Shakespeare', new Date(2019/7/12)),
         new Quote (2, 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style', 'Maya Angelou ', 'C. J. Cherryh', new Date(2019/2/22)),
         new Quote (3, 'The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.', 'Helen Keller', 'Robert Benchley', new Date(2019/5/10)),
         new Quote (4, 'Work while they sleep. Learn while they party. Save while they spend. Live like they dream', 'Syed Balkhi', 'Neil Gaiman', new Date(2019/5/21)),
          ];
          
          toggleQuotes(index){
            this.quote[index].showDescription = !this.quote[index].showDescription;
          }

          // votequote = 0;
          // voteshow = true;

          // voteShow(){
          //   this.voteshow = true;
          //   return this.votequote = this.votequote + 1;
          // }
          deleteQuote(isComplete, index){
            if (isComplete) {
              let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].quote}?`)
        
              if (toDelete){
                this.quote.splice(index,1)
              }
            }
          }
        //    completeQuote(isComplete, index){
        //      if (isComplete) {
        //       this.quote.splice(index,1);
        //   }
        //  }
         addNewQuote(quote){
          let quoteLength = this.quote.length;
          quote.id = quoteLength+1;
          quote.completeDate = new Date(quote.completeDate)
          this.quote.push(quote)
        }
            constructor() {}

            ngOnInit() {
            }
          
          }