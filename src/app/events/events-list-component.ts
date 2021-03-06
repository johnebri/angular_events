import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'events-list',
  // templateUrl: './events-list-component.html'
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
  </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/react.jpg',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
