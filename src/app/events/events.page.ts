import { Component, OnInit } from '@angular/core';
import { EventI } from '../models/event.interface';
import { EventService } from '../services/event.service';
import { LoadingController } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: EventI[];

  constructor(private eventService: EventService, private loadingController: LoadingController, private iab: InAppBrowser, private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.events = [];
    this.loadEvents();
  }

  async loadEvents(){
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
    var subEvent = this.eventService.getEvents().subscribe(res => {
      loading.dismiss();
      this.events = res;
      console.log(res);
      subEvent.unsubscribe();
    });

    
  }

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
