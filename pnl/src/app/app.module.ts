import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IntEmoPageModule} from '../pages/int-emo/int-emo.module';
import {CreenciasPageModule} from '../pages/creencias/creencias.module';
import {FitCerPageModule} from '../pages/fit-cer/fit-cer.module';
import {LengCorpPageModule} from '../pages/leng-corp/leng-corp.module';
import {MetaforaPageModule} from '../pages/metafora/metafora.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntEmoPageModule,
    CreenciasPageModule,
    FitCerPageModule,
    LengCorpPageModule,
    MetaforaPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
