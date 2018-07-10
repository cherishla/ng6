import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  createProjectCode=`  //開發
  ng build

  //產品
  ng build --prod
  `;
  serveCode=`  //預設網址: http://localhost:4200
  ng serve

  //如果要開啟已包好的產品版本(預設開啟index.html) 
  npm install lite-server --save-dev
  cd 專案名稱/dist
  lite-server 
  `;

  createFileCode=`  //檔案類型(常用): component、module、service、class 
  //檔案類型(不常用): guard、directive、interface、enum、pipe、application、library、universal 
  ng generate 檔案類型 檔案名稱
  ng g 檔案類型 檔案名稱
   `;
   
  constructor() { }

  ngOnInit() {
  }

}
