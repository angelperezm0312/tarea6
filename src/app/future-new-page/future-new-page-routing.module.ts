import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureNewPagePage } from './future-new-page.page';

const routes: Routes = [
  {
    path: '',
    component: FutureNewPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureNewPagePageRoutingModule {}
