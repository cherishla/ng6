import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterParamComponent } from './master-param/master-param.component';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { MasterDetailRoutingModule } from './master-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MasterDetailRoutingModule,
    ShareModule
  ],
  declarations: [
    MasterParamComponent,
    PersonComponent,
  ]
})
export class MasterDetailModule { }
