import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Course} from '../../models/course';


@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {
  @Input() courseItem!: Course ;
  @Output() deleteItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  deleteCurrentItem(value: string): void {
    this.deleteItemEvent.emit(value);
  }

}
