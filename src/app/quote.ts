

// export class Quote {
//   id: number;
//   quoter: string;
//   author:string;
//   publisher:string;
// }
export class Quote {
  showDescription: boolean;
  constructor(public id: number, public quote: string, public author: string, public publisher: string, public completeDate: Date){
    this.showDescription=false;
  }
}


