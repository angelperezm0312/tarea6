import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaPagePageRoutingModule } from './clima-page-routing.module';

import { ClimaPagePage } from './clima-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaPagePageRoutingModule
  ],
  declarations: [ClimaPagePage]
})
export class ClimaPagePageModule {}
