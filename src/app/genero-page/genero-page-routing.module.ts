import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneroPagePage } from './genero-page.page';

const routes: Routes = [
  {
    path: '',
    component: GeneroPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneroPagePageRoutingModule {}
