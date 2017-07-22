import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { StartPage } from '../pages/start/start';
import { PlacePage } from '../pages/place/place';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBNi7x0CVdPBLbqgufHQ6y5hq3wCJCrImA",
  authDomain: "sugbox-347c4.firebaseapp.com",
  databaseURL: "https://sugbox-347c4.firebaseio.com",
  projectId: "sugbox-347c4",
  storageBucket: "sugbox-347c4.appspot.com",
  messagingSenderId: "748619183048"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    PlacesPage,
    StartPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    PlacesPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
