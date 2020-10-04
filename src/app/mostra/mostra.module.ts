import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraPageRoutingModule } from './mostra-routing.module';

import { MostraPage } from './mostra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraPageRoutingModule
  ],
  declarations: [MostraPage]
})
export class MostraPageModule {}
