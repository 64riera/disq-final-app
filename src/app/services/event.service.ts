import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventI } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsCollection: AngularFirestoreCollection<EventI>;
  private events: Observable<EventI[]>;

  constructor(db: AngularFirestore) { 
    this.eventsCollection = db.collection<EventI>('events');
    this.events = this.eventsCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }

  getEvents(){
    return this.events;
  }

  getEvent(id: string) {
    return this.eventsCollection.doc<EventI>(id).valueChanges();
  }


}
