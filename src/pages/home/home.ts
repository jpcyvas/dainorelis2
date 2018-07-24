import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SongsPage } from '../songs/songs';

@Component({
  selector:'page-home',
  templateUrl:'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController) {

  }

  goToSongs(){
    console.log("jonas");
    this.navCtrl.push(SongsPage);
  }

}
