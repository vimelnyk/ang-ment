import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../models/course';
import {MS_PER_DAY} from '../../mocks/constants';


@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {
  color = 'transparent';
  currentDate = Date.now();
  @Input() courseItem!: Course ;
  @Output() deleteItemEvent = new EventEmitter<string>();
  @Input() ind!: number;
  constructor() { }

  ngOnInit(): void {
    this.checkCourseNovelty(this.courseItem.creationDate);
  }

  deleteCurrentItem(value: string): void {
    this.deleteItemEvent.emit(value);
  }

  checkCourseNovelty(value: number): void {
    if (value) {
      if (value < this.currentDate && value >= this.currentDate - 14 * MS_PER_DAY){
        this.color = 'green';
      }
      if (value > this.currentDate) {
        this.color = 'blue';
      }
    }
  }

}
