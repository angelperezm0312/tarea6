import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratemePage } from './contrateme.page';

const routes: Routes = [
  {
    path: '',
    component: ContratemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratemePageRoutingModule {}
