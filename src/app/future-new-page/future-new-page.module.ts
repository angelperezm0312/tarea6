import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FutureNewPagePageRoutingModule } from './future-new-page-routing.module';

import { FutureNewPagePage } from './future-new-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FutureNewPagePageRoutingModule
  ],
  declarations: [FutureNewPagePage]
})
export class FutureNewPagePageModule {}
