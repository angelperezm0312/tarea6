import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneroPagePageRoutingModule } from './genero-page-routing.module';

import { GeneroPagePage } from './genero-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneroPagePageRoutingModule
  ],
  declarations: [GeneroPagePage]
})
export class GeneroPagePageModule {}
