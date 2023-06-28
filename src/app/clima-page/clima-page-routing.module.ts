import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaPagePage } from './clima-page.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaPagePageRoutingModule {}
