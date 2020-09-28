import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBarangPageRoutingModule } from './all-barang-routing.module';

import { AllBarangPage } from './all-barang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBarangPageRoutingModule
  ],
  declarations: [AllBarangPage]
})
export class AllBarangPageModule {}
