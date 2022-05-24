import { Component } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clickedImage: string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: this.camera.Direction.FRONT,
  }

  constructor(private camera: Camera, private camerapre: CameraPreview) { }

  ngOninit() {
    this.camerapre.FOCUS_MODE.EDOF
  }

  OpenCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

}
