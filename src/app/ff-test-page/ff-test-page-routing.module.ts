import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {extract, Route} from '@app/core';
import { FfTestPageComponent } from './ff-test-page.component';
import {AboutComponent} from '@app/about/about.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ff-test-page', component: FfTestPageComponent, data: { title: extract('Ff-test-page') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FfTestPageRoutingModule { }
