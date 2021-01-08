import { RestapiService } from './../../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email;
  password;
  constructor(private restApi: RestapiService,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private router: Router,
              public storage: Storage) { }

  ngOnInit() {
    this.storage.get('statusLogin').then((val)=>{
      if(val !== null){
        this.router.navigate(['./home'])
      }
    });
  }
  async login(form){
    const loading = await this.loadingCtrl.create({
      message:'Loading!'
    });
    await loading.present();
    console.log(form.value.username);
    console.log(form.value.password);
    let data = {
      username : form.value.username,
      password : form.value.password
    };
    await this.restApi.signInWithUsername(data)
    .subscribe(res => {
      if(res['message'] === 'Success'){
          loading.dismiss();
          this.router.navigate(['./home']);
          this.storage.set('statusLogin', 1);
      } else {
        loading.dismiss();
        this.presentToast();
      }
    }, err => {
      loading.dismiss();
      console.log(err);
      this.presentToast();
    });
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Username dan password yang dimasukkan salah!',
      duration: 500
    });
    toast.present();
  }
}
