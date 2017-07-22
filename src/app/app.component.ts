import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = HomePage;
  loader: any;

  constructor(public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {

    this.presentLoading();

    this.platform.ready().then(() => {

      this.storage.get('introShown').then((result) => {
        if(result){
          this.rootPage = StartPage;
        } else {
          this.storage.set('introShown', true);
          this.rootPage = HomePage;

        }

        this.loader.dismiss();

      });

    });

  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loader.present();

  }

}
