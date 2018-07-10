import { Component, OnInit } from '@angular/core';
declare var Prism;

@Component({
  selector: 'app-master-param',
  templateUrl: './master-param.component.html',
  styleUrls: ['./master-param.component.css']
})
export class MasterParamComponent implements OnInit {

  masterCode = `  <p>設定子元件
    <input type="text" (keyup)="changeName(inputName.value)" #inputName/>
  </p>

  子元件給我的:{{name}}

  <app-person (getName)="getName($event)" [name]="name"></app-person>

  `;
  masterTSCode = ` name = 'abc';
  ngOnInit() {
  }
  getName(data) {
    this.name = data;
  }
  changeName(data) {
    this.name = data;
  }
  `;
  personCode = `  <div style="border:1px solid red; padding:10px">
    <p>我是子元件</p>
    <input type="text" [value]="name" (keyup)="nameChange(childInput.value)" #childInput/>
  </div>

  `;
  personTSCode = ` import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
  constructor() { }
  @Output() getName = new EventEmitter<string>();
  @Input() name: string;

  nameChange(name) {
    this.getName.emit(name);
  }
  `;
  constructor() {

  }

  name = 'abc';
  ngOnInit() {
  }

  getName(data) {
    this.name = data;
  }
  changeName(data) {
    this.name = data;
  }


}
