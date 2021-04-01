import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-courses-list-header',
  templateUrl: './courses-list-header.component.html',
  styleUrls: ['./courses-list-header.component.scss']
})
export class CoursesListHeaderComponent implements OnInit {
  searchText = '';
  @Output() searchTextQuery = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  sendSearchText(value: string): void {
    this.searchTextQuery.emit(value);
  }
}
