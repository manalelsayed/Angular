import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  srcProp:string="../../assets/images/wes.PNG";
  width:string="300";
  height:string="100";
  ngOnInit(): void {
  }

}
