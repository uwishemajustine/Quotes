import { DateCountingPipe } from 'Quotes/src/app/date-counting.pipe';

// export class Quote {
//   id: number;
//   quoter: string;
//   author:string;
//   publisher:string;
// }
export class Quote {
  showDescription: boolean;
  constructor(public id: number, public quote: string, public author: string, public publisher: string, public newDate: Date){
    this.showDescription=false;
  }
}