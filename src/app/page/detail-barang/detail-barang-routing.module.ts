import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBarangPage } from './detail-barang.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBarangPageRoutingModule {}
