import { DataService } from './../../service/data.service';
import { RestapiService } from './../../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-all-barang',
  templateUrl: './all-barang.page.html',
  styleUrls: ['./all-barang.page.scss'],
})
export class AllBarangPage implements OnInit {
  capturedSnapURL ;
  barang : any = [];
  barangLoaded : any = [];
  i : number = 50;

  constructor(
    public restApi: RestapiService,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public dataSvc: DataService
  ) { }

  ngOnInit() {
    this.presentLoading();
  }
  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message : 'Loading list!'
    });
    let data = {
      status : 0
    }
    await loading.present();
    await this.restApi.getAllBarang(data)
    .subscribe(res => {
      this.barangLoaded = res;
      this.initBarang();
    });
    loading.dismiss();
  }
  loadData(event){
    setTimeout(()=>{
      let tmp = this.i + 50;
      for(let i = this.i ; i < tmp ; i++){
        this.barang.push(this.barangLoaded[i]);
      }
      this.i = this.i + 50;
      event.target.complete();
      if(this.barang.length >= this.barangLoaded.length){
        event.target.disabled = true;
      }
    },250);
  }
  search(ev : CustomEvent){
    const val = ev.detail.value;
    if(val === ''){
      this.initBarang();
    } else {
    this.barang = this.barangLoaded.filter(barang => {
        // tslint:disable-next-line: no-unused-expression
        return barang.nama_barang.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }
  }

  initBarang(){
    this.barang = [];
    for(let i = 0 ; i < this.i ; i++){
      this.barang.push(this.barangLoaded[i]);
    }
    this.i = 25;
  }

}
