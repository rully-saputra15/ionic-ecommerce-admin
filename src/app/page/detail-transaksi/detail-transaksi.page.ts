import { AlertController } from '@ionic/angular';
import { RestapiService } from './../../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-transaksi',
  templateUrl: './detail-transaksi.page.html',
  styleUrls: ['./detail-transaksi.page.scss'],
})
export class DetailTransaksiPage implements OnInit {
  id;
  status;
  data;
  constructor(
    private route: ActivatedRoute,
    private restApi: RestapiService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.status = this.route.snapshot.paramMap.get('status');
    this.showDetail();
  }
  async showDetail(){
    let data = {
      id:this.id,
      status:this.status
    };
    await this.restApi.getTransaksiById(data)
    .subscribe(res => {
      this.data = res;
    },err => {
      this.presentAlertError();
      this.router.navigate(['./home']);
    })
  }
  async presentAlertError(){
    const alert = await this.alertCtrl.create({
      header:'Error',
      message:'Transaksi gagal ditampilkan,harap coba lagi!',
      buttons:['Oke']
    });
    alert.present();
  }
}
