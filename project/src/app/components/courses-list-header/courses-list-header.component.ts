import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list-header',
  templateUrl: './courses-list-header.component.html',
  styleUrls: ['./courses-list-header.component.scss']
})
export class CoursesListHeaderComponent implements OnInit {
  searchText = '';
  constructor() { }
  ngOnInit(): void {
  }
  sendSearchText(value: string): void {
    console.log(value);
  }
}
