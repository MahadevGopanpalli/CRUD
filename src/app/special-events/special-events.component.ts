import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'
import {StudentService} from '../student.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html'
})
export class SpecialEventsComponent implements OnInit 
{  
  constructor(private studentService: StudentService) 
  { }
  
  studentArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit(){}
 /* specialEvents = []

  constructor(private _eventService: EventService,
              private _router: Router) { }

  ngOnInit() 
  {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }*/
}
