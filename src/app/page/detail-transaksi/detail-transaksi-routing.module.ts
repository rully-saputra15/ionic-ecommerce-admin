import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTransaksiPage } from './detail-transaksi.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTransaksiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTransaksiPageRoutingModule {}
