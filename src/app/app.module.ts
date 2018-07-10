import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeadComponent } from './head/head.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SugarComponent } from './sugar/sugar.component';
import { ServiceComponent } from './service/service.component';
import { RouteComponent } from './route/route.component';
import { FormComponent } from './form/form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WebStyleComponent } from './web-style/web-style.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PersonService } from './person.service';
import { ComponentLifeCycleComponent } from './component-life-cycle/component-life-cycle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterDetailModule } from './master-detail/master-detail.module';
import { ShareModule } from './share/share.module';
@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    HelloWorldComponent,
    SidebarComponent,
    HeadComponent,
    IntroductionComponent,
    SugarComponent,
    ServiceComponent,
    RouteComponent,
    FormComponent,
    WebStyleComponent,
    ComponentLifeCycleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MasterDetailModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ShareModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
