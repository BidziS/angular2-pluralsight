import { Component, OnInit } from '@angular/core';

import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';


@Component({
    templateUrl: '/app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent;

  constructor(private eventService: EventService, 
    private toastr: ToastrService, private route: ActivatedRoute){
    
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThubnailClick(eventName){
    this.toastr.success(eventName);
  }
}