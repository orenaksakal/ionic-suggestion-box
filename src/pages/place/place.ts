import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ToastController} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  public placeId;
  public suggestions;
  public placeName;
  public placeSeg;
  public suggest;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public toastCtrl: ToastController) {
    this.placeId = navParams.get('placeId');
    this.placeName = navParams.get('placeName');
    this.suggest = db.list(`/places/${this.placeId}/suggestions`);
    this.suggestions = db.list(`places/${this.placeId}/suggestions`,
      {
        query: {
          orderByChild: 'points'
        }
      }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

    this.placeSeg = "see";

  }

  makeSuggestion(title, text) {
    this.suggest.push({
      title: title,
      text: text
    });
    this.presentToast();
    this.placeSeg = "see";
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Suggestion Sent',
      duration: 2000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

}
