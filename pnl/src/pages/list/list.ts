import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IntEmoPage} from '../int-emo/int-emo';
import {CreenciasPage} from '../creencias/creencias';
import {FitCerPage} from '../fit-cer/fit-cer';
import {LengCorpPage} from '../leng-corp/leng-corp';
import {MetaforaPage} from '../metafora/metafora';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {
  }

  gointemo():void{
    this.navCtrl.push('intemo');
  }

  gometafora():void{
    this.navCtrl.push('metafora');
  }

  gofitness():void{
    this.navCtrl.push('fitness');
  }

  golencor():void{
    this.navCtrl.push('lencor');
  }

  gocreencias():void{
    this.navCtrl.push('creencias');
  }

}
