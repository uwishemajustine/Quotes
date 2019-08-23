// export class Quote {
//   id: number;
//   qoute: string;
//   author: string;
//   publisher:string;
// }
export class Quote {
  showDescription: boolean;
  constructor(public id: number,public quote: string,public author: string, public publisher: string){
    this.showDescription=true;
  }
}   
     