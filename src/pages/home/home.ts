import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: AngularFireList<any>;
  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
    this.songs = afDatabase.list('/songs');
  }

}
