import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  goToPlaces(){
    this.navCtrl.setRoot(PlacesPage);
  }

}
