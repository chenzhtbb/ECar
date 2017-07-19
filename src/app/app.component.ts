import { Component, ViewChild,OnInit,Input } from '@angular/core';

import { Platform, MenuController, Nav, NavController } from 'ionic-angular';

import { MapPage }        from '../pages/map/map';
import { Button }         from './button';
import { ButtonService }     from './button.service';
import { JourneyPage }       from '../pages/journey/journey';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html',
  styles: [
  `
  .circular img{
    border-radius: 5px;
    width: 100px; 
    height: 100px;
  } 
  `
  ],
  providers: [ButtonService]
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;
  // make HelloIonicPage the root (or first) page
  rootPage = MapPage;

  buttons : Button[] = [];

  constructor(
    //public navCtrl: NavController,
    public buttonService: ButtonService,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
    //public navCtrl: NavController
  ) {

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(button) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page

    //this.nav.setRoot(button.component);
    this.nav.push(button.component,{
      id: "123",
      name: "Carl"
    });
  }

  getButtons(): void {
  this.buttonService.getButtons().then(buttons => this.buttons = buttons);
}

  ngOnInit():void{
    this.getButtons();
  }
}
