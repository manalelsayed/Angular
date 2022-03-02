import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ICategory ,DiscountOffers} from '../Shared Classes and types/Icategory';
import { Iproduct } from '../Shared Classes and types/IProduct';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  constructor(private productServ:ProductServiceService) {
    this.Discount=DiscountOffers['No Discount'],
    this.storeName="manalStore",
    this.storeLogo="../../assets/images/favicon.ico",
  
    
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
  isShown:boolean=false;
  ngOnInit(): void {
  }
  hideTable ():void{
    this.isShown=!this.isShown;
  }

  renderValues(){
    this.productList=this.productServ.GetAllProducts();
  }
}
