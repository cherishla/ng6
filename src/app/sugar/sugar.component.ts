import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sugar',
  templateUrl: './sugar.component.html',
  styleUrls: ['./sugar.component.css']
})
export class SugarComponent implements OnInit {

  //#region
  ifCode = `  <input type="number" [(ngModel)]="name">
  <p *ngIf="name > 10">大於10</p>
  <p *ngIf="name <= 10">太小囉</p>
  
  //*號取代了template，所以是語法糖
  <p template="ngIf:name > 10">大於10</p>
  `;

  ifTsCode = `  constructor() { }
  age = 1;
  ngOnInit() {
  }
  `;

  forCode = `<table id="datatable1" class="table-datatable table table-striped table-hover mv-lg">
  <thead>
    <tr>
      <th>index</th>
      <th>name</th>
      <th>age</th>
      <th>first</th>
      <th>last</th>
      <th>even</th>
      <th >odd</th>
    </tr>
  </thead>
   <tbody>
    <tr class="gradeX" *ngFor="let item of personsData;let i= index; first as first; last as last; even as isEven; odd as isOdd;">
      <td>{{i+1}}</td>
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
      <td><span *ngIf="first">v</span></td>
      <td><span *ngIf="last">v</span></td>
      <td><span *ngIf="isEven">v</span></td>
      <td><span *ngIf="isOdd">v</span></td>
    </tr>
   </tbody>
  </table>
  `;
  forTsCode = `  constructor() { }
  personsData = [
    {name: 'kiki', age: 10},
    {name: 'lala', age: 11},
    {name: 'kaka', age: 12},
    {name: 'lili', age: 13},
  ]
  `;

  switchCode = `  <input type="radio" name="sex" [(ngModel)]="sex" value="M">男
  <input type="radio" name="sex" [(ngModel)]="sex" value="F">女
  <input type="radio" name="sex" [(ngModel)]="sex" value="UFO">Other
  <span [ngSwitch]="sex">
  <p *ngSwitchCase="'M'"> Hi boy~</p>
  <p *ngSwitchCase="'F'">Hello girl~</p>
  <p *ngSwitchDefault>OMG!</p>

  `;

  switchTSCode = `  constructor() { }
  sex = 'M';
  `;
  //#endregion
  constructor() { }
  age = 1;
  sex = 'M';
  name:number = 0;
  personsData = [
    {name: 'kiki', age: 10},
    {name: 'lala', age: 11},
    {name: 'kaka', age: 12},
    {name: 'lili', age: 13},
  ];
  ngOnInit() {
  }


}
