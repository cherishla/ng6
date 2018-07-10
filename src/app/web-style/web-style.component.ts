import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-style',
  templateUrl: './web-style.component.html',
  styleUrls: ['./web-style.component.css']
})
export class WebStyleComponent implements OnInit {

  constructor() { }
  isRed = false;
  fontSize = '30px';
  appStyle = `.code{
    color:red;
  }
  `;
  codeStyle =
` .code{
    margin-top:10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding:5px;
    background-color: #358ccb;
    border: 1px solid #dfdfdf;
    color:white;
  }
  `;

  classCode = `.title.red{
    color:red;
}

.title.blue{
    color:blue;
}
  `;

  classHtmlCode = `<p class="title" [ngClass]="{'red': isRed, 'blue':!isRed}">Title</p>
        <button (click)="changeColor()">變顏色</button>
  `;

  classTsCode = `isRed = false;
  changeColor() {
    this.isRed = !this.isRed;
  }
  `;

  styleHtmlCode = `<p [ngStyle]="{'font-size': fontSize }">large size</p>`;
  styleTsCode = `fontSize = '30px';`;
  attrCode = `<p [style.font-size.px]="'12'" [style.background-color]="'yellow'">small font</p>`;
  ngOnInit() {
  }

  changeColor() {
    this.isRed = !this.isRed;
  }
}
