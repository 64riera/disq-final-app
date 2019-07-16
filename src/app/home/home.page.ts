import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser, private actionSheetController: ActionSheetController, private platform: Platform) {}

  launchFacebookPage() {
   
    const options: InAppBrowserOptions = {
    zoom: 'no',
    location:'yes',
    toolbar:'yes',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    disallowoverscroll: 'yes',
    enableViewportScale: 'yes',
    hideurlbar: 'yes'
    };
    const browser = this.iab.create('https://www.facebook.com/maleanterecords', '_blank', options);

   
  }

  launchTwitterPage() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
      };
    const browser = this.iab.create('https://twitter.com/maleanterecords', '_blank', options);
  }

  launchMusicPage() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
      };
    const browser = this.iab.create('https://www.mixcloud.com/MaleanteRecords/', '_blank', options);
  }

  launchInstagramPage() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
      };
    const browser = this.iab.create('https://www.instagram.com/maleanterecords/', '_blank', options);
  }

  launchMixPage() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location:'yes',
      toolbar:'yes',
      clearcache: 'yes',
      clearsessioncache: 'yes',
      disallowoverscroll: 'yes',
      enableViewportScale: 'yes'
      };
    const browser = this.iab.create('https://maleanterecords.bandcamp.com/', '_blank', options);
  }

  async showActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Más opciones...',
      buttons: [{
        text: 'Acerca de',
        role: 'destructive',
        icon: 'information-circle-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Salir',
        icon: 'exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
