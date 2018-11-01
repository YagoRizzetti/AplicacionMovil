import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {IntEmoPageModule} from '../pages/int-emo/int-emo.module';
import {CreenciasPageModule} from '../pages/creencias/creencias.module';
import {FitCerPageModule} from '../pages/fit-cer/fit-cer.module';
import {LengCorpPageModule} from '../pages/leng-corp/leng-corp.module';
import {MetaforaPageModule} from '../pages/metafora/metafora.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
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
    ListPage,
    WelcomePage,
    SignupPage
  ],
})
export class AppModule {}
