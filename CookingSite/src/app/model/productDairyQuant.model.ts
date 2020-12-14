import { ProductModel } from './product.model';


  export class productDairyQuantModel{

    constructor(
      public quantity: string,
      public quantityType:string,
      public product: string
    ){}
  }