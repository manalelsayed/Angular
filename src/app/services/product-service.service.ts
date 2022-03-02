import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  GetAllProducts(){
      return [{
        Id: 1,
        Name: "a",
        Quantity: 5,
        Price: 300,
        Img: "wes.png"
      },
      {
        Id: 2,
        Name: "b",
        Quantity: 5,
        Price: 300,
        Img: "wes.png"
      }]

  }
  GetProductById(prdId:number){
     let productList=this.GetAllProducts();
     productList.forEach(element => {
       if (element.Id ==prdId)
       return element
       else if (prdId==null) return null ;
       else{ return null;}
     }
    
     );
  }
}
