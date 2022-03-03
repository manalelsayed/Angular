import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

  
export class AppComponent implements  AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'day1';
  constructor(){}
  @ViewChild(ProductsComponent) c!: ProductsComponent;

  ngAfterViewInit() {
    this.c.renderValues();
  }  


   
}
function ChildComponent(ChildComponent: any) {
  throw new Error('Function not implemented.');
}

