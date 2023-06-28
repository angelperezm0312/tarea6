import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratemePageRoutingModule } from './contrateme-routing.module';

import { ContratemePage } from './contrateme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratemePageRoutingModule
  ],
  declarations: [ContratemePage]
})
export class ContratemePageModule {}
