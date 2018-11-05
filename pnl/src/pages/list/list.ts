import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
