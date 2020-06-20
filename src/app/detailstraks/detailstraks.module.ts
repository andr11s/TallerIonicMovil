import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailstraksPageRoutingModule } from './detailstraks-routing.module';

import { DetailstraksPage } from './detailstraks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailstraksPageRoutingModule
  ],
  declarations: [DetailstraksPage]
})
export class DetailstraksPageModule {}
