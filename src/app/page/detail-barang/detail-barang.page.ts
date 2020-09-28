import { RestapiService } from './../../service/restapi.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
@Component({
  selector: 'app-detail-barang',
  templateUrl: './detail-barang.page.html',
  styleUrls: ['./detail-barang.page.scss'],
})
export class DetailBarangPage implements OnInit {
  capturedSnapURL;
  id;
  nama;
  hargaPokok;
  hargaLevel1;
  hargaLevel2;
  foto;
  options: any;
  
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  constructor(
    public route : ActivatedRoute,
    public camera : Camera,
    public actionSheetController: ActionSheetController,
    public imagePicker: ImagePicker,
    public file: File,
    public restApi:RestapiService
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.nama = this.route.snapshot.paramMap.get('namaBarang');
    this.hargaPokok = this.route.snapshot.paramMap.get('hargaPokok');
    this.hargaLevel1 = this.route.snapshot.paramMap.get('hargaLevel1');
    this.hargaLevel2 = this.route.snapshot.paramMap.get('hargaLevel2');
    this.foto = this.route.snapshot.paramMap.get('foto');
  }
  async presentActionSheetFoto(){
    const actionSheet = await this.actionSheetController.create({
      header:'Foto',
      buttons:[{
        text:'Ambil Foto',
        handler:() => {
          this.takePhoto();
        }
      },{
        text:'Ambil Foto dari Album',
        handler:() => {
          this.getImagesLibrary();
        }
      }]
    });
    await actionSheet.present();
  }
  takePhoto() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      const tempFileName = imageData.substr(imageData.lastIndexOf('/')+1);
      console.log(tempFileName);
      this.file.resolveLocalFilesystemUrl(imageData).then((entry : FileEntry) => {
        entry.file(file => {
          this.readFile(file);
        });
      });
      //this.capturedSnapURL = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  getImagesLibrary(){
    this.options = {
      width: 200,
      quality: 25,
      outputType: 0,
      maximumImagesCount: 1
    };
    this.imagePicker.getPictures(this.options).then((results) => {
      this.file.resolveLocalFilesystemUrl(results[0]).then((entry : FileEntry) => {
        entry.file(file => {
          this.readFile(file);
        });
      });
    },(err)=> {
      alert(err);
    });
  }
  readFile(file: any){
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      const formData = new FormData();
      formData.append('name',file.name);
      formData.append('file',imgBlob,file.name);
      formData.append('id',this.id);
      this.restApi.uploadFoto(formData)
      .subscribe(res => {
        console.log(res);
      })
    };
    reader.readAsArrayBuffer(file);
  }
}
