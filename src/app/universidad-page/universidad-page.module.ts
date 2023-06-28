import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadPagePageRoutingModule } from './universidad-page-routing.module';

import { UniversidadPagePage } from './universidad-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversidadPagePageRoutingModule
  ],
  declarations: [UniversidadPagePage]
})
export class UniversidadPagePageModule {}
