import { RestapiService } from './../../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data;
  constructor(private restApi: RestapiService,
              private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.getAllData();
  }
  async getAllData(){
    await this.restApi.getAllTransaksi()
    .subscribe(res => {
      this.data = res;
    }, err => {
      this.presentAlertError();
    })
  }
  async presentAlertError(){
    const alert = await this.alertCtrl.create({
      header:'Error',
      message:'Silahkan menghubungi admin!',
      buttons:['Oke']
    });
    alert.present();
  }
  doRefresh(ev){
    setTimeout(() => {
      this.getAllData();
      ev.target.complete();
    },1000)
  }
}
