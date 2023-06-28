import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdadPagePageRoutingModule } from './edad-page-routing.module';

import { EdadPagePage } from './edad-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdadPagePageRoutingModule
  ],
  declarations: [EdadPagePage]
})
export class EdadPagePageModule {}
