import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBarangPage } from './all-barang.page';

const routes: Routes = [
  {
    path: '',
    component: AllBarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllBarangPageRoutingModule {}
