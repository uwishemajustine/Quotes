export class Quote {
   showDescription: boolean;
  constructor(public id: number, public quote: string, public author: string, public publisher: string){
    this.showDescription=false;
  }
}
    
     