import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.toast.create({
          message:`Welcome to PNL, ${data.email}`,
          duration:1000
        }).present();
      }
      else{
        this.toast.create({
          message:`could not find authentication details.`,
          duration:1000
        }).present();
      }
    })
  }
}
