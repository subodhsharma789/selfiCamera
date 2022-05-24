import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CameraPreview
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
