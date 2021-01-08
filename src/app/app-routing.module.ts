import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail-transaksi/:id/:status/:nama/:total',
    loadChildren: () => import('./page/detail-transaksi/detail-transaksi.module').then( m => m.DetailTransaksiPageModule)
  },
  {
    path: 'all-barang',
    loadChildren: () => import('./page/all-barang/all-barang.module').then( m => m.AllBarangPageModule)
  },
  {
    path: 'detail-barang/:id/:namaBarang/:hargaPokok/:hargaLevel1/:hargaLevel2/:foto',
    loadChildren: () => import('./page/detail-barang/detail-barang.module').then( m => m.DetailBarangPageModule)
  },
  {
    path: 'detail-barang/:id/:namaBarang/:hargaPokok/:hargaLevel1/:hargaLevel2',
    loadChildren: () => import('./page/detail-barang/detail-barang.module').then( m => m.DetailBarangPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
