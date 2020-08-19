import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTransaksiPageRoutingModule } from './detail-transaksi-routing.module';

import { DetailTransaksiPage } from './detail-transaksi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTransaksiPageRoutingModule
  ],
  declarations: [DetailTransaksiPage]
})
export class DetailTransaksiPageModule {}
