import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPlaces(){
    this.navCtrl.setRoot(PlacesPage);
  }
}
