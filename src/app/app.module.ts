import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountingPipe } from './date-counting.pipe';
import { MyquoteFormComponent } from './myquote-form/myquote-form.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { StrikesuccessDirective } from './strikesuccess.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DateCountingPipe,
    MyquoteFormComponent,
    // QuizComponent,
    // StrikesuccessDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
