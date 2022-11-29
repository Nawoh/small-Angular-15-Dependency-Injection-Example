import { Component, OnInit } from '@angular/core';
import { DatahandlerService , PeoplehandlerService} from '../datahandler.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses;
  people;

  constructor(service: DatahandlerService, service2:PeoplehandlerService) {
    this.courses = service.getData();
    this.people = service2.getPeople();

   }

  ngOnInit() {
  }

}