import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/course';
import {courses} from '../../mocks/data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  coursesList: Course[] | undefined;
  constructor() { }
  deleteItem(message: string): void {
    console.log(message);
  }

  learnMore(): void {
    console.log('Learn More');
  }

  trackId( index: number, element: Course ): any {
    return element ? element.id : null;
  }


  ngOnInit(): void {
    this.coursesList = courses;
  }

}
