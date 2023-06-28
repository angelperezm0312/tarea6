import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdadPagePage } from './edad-page.page';

const routes: Routes = [
  {
    path: '',
    component: EdadPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdadPagePageRoutingModule {}
