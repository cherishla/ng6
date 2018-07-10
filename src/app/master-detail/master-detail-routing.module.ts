import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterParamComponent } from './master-param/master-param.component';

const masterRoutes: Routes = [
  { path: 'master',  component: MasterParamComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(masterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MasterDetailRoutingModule { }
