import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  //#region code sample
  tsCode = `  export class HelloWorldComponent implements OnInit {
    constructor() { }
    title = 'Hello World !';
    title2 = 'Hello World2 !';
  }
  `;
  interCode = `<p>{{title}}</p>
  `;
  propCode = `<input type="text" [value]="title" />
  `;
  eventCode = `<button (click)="showTitle($event)">點我</button>
  `;

  twoWayBindingModule = ` import { FormsModule } from '@angular/forms';
  @NgModule({
    imports: [
      FormsModule
    ],
  `;
  twoWayBindingCode = `  <input type="text" [(ngModel)]="title2" />
  <p>{{title2}}</p>
  `;
  pipeCode = `  <p>{{'{name:lala, sex:F}' | json }}</p>
  <p>{{ today }}</p>
  <p>{{  today | date:'fullDate' | uppercase}}</p>
  `;
  pipeTsCode = `  today: Date = new Date();
  jsonToString = {name:'lala', sex:'F'};
  `;
  templateCode = `  <input type="text" [value]="title" #tempTitle />
  <p>{{tempTitle.value}}</p>
  `;
  templateRefCode = `<input type="text" [value]="title" ref-tempTitle />
  `;
  templateCode1 = `  <input type="text" [value]="title" #tempTitle />
  <p>{{tempTitle.value}}</p>
  <button (click)="tempChange(tempTitle1)">Event 傳遞</button>
  <button (click)="tempChange2()">viewchild 傳遞</button>

  `;
  templateTSCode1 = ` import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
  constructor() { }
  @ViewChild('tempTitle1') tempTitle1: ElementRef;

  tempChange(tempTitle) {
    tempTitle.value = 'hihi~';
  }
  tempChange2() {
    this.tempTitle1.nativeElement.value = 'bye~';
  }
  `;
//#endregion
constructor() { }

  today: Date = new Date();
  title = 'Hello World !';
  title2 = 'Hello World2 !';
  jsonToString = {name:'lala', sex:'F'};
  @ViewChild('tempTitle1') tempTitle1: ElementRef;

  ngOnInit() {
  }
  showTitle(data) {
    console.log(data);
  }
  tempChange(tempTitle) {
    tempTitle.value = 'hihi~';
  }
  tempChange2() {
    this.tempTitle1.nativeElement.value = 'bye~';
  }
}
