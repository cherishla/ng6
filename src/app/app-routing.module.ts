import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SugarComponent } from './sugar/sugar.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ServiceComponent } from './service/service.component';
import { RouteComponent } from './route/route.component';
import { FormComponent } from './form/form.component';
import { WebStyleComponent } from './web-style/web-style.component';
import { ComponentLifeCycleComponent } from './component-life-cycle/component-life-cycle.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: DashboardComponent },
  { path: 'basic', component: HelloWorldComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'lifecycle', component:  ComponentLifeCycleComponent},
  { path: 'create', component: CreateProjectComponent },
  { path: 'sugar', component: SugarComponent },
  // { path: 'masterParam', component: MasterParamComponent},
  { path: 'style', component: WebStyleComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'route', component: RouteComponent},
  { path: 'form', component: FormComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})


export class AppRoutingModule { }
