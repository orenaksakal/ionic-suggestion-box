import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {PlacePage} from '../place/place';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  places;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.places = this.db.list('/places');
  }
  placeSelected(placeId,placeName){
    this.navCtrl.push(PlacePage,{
      placeId:placeId,
      placeName: placeName
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}
