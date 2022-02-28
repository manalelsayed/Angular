import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Shared Classes and types/Icategory';
import { Iproduct } from '../Shared Classes and types/IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  constructor() {
    this.Discount=DiscountOffers['No Discount'],
    this.storeName="manalStore",
    this.storeLogo="wes.png",
    this.productList=[{
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
    }],
    this.CategoryList=[{Id:1 , Name:"typeA"},{Id:2 , Name:"typeB"}],
    this.ClientName="client",
    this.IsPurshased=false
   }
  Discount:DiscountOffers;
  storeName:string="";
  storeLogo:string="";
  productList=new Array<Iproduct>();
  CategoryList=new Array<ICategory>();
  ClientName:string="";
  IsPurshased:boolean;
  ngOnInit(): void {
  }

}
