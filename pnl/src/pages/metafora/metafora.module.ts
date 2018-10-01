import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetaforaPage } from './metafora';

@NgModule({
  declarations: [
    MetaforaPage,
  ],
  imports: [
    IonicPageModule.forChild(MetaforaPage),
  ],
})
export class MetaforaPageModule {}
