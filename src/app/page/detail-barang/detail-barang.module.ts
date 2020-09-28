import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBarangPageRoutingModule } from './detail-barang-routing.module';

import { DetailBarangPage } from './detail-barang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBarangPageRoutingModule
  ],
  declarations: [DetailBarangPage]
})
export class DetailBarangPageModule {}
