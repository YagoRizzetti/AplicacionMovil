import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { user } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
 
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as user;

  constructor(private afAuth: AngularFireAuth, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async signup(user:user){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email , user.password);
    console.log(result);
    }
    catch(e){
      console.error(e);
    }

  }

}
