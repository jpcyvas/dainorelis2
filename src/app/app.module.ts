import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Dainorelis } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home'
import { SongsPage } from '../pages/songs/songs'

@NgModule({
  declarations: [
    Dainorelis,
    HomePage,
    SongsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Dainorelis)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Dainorelis,
    HomePage,
    SongsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
