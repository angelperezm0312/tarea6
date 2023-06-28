import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversidadPagePage } from './universidad-page.page';

const routes: Routes = [
  {
    path: '',
    component: UniversidadPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversidadPagePageRoutingModule {}
