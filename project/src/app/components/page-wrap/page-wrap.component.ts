import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wrap',
  templateUrl: './page-wrap.component.html',
  styleUrls: ['./page-wrap.component.scss']
})
export class PageWrapComponent implements OnInit {
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchQuery(value: string): void {
    this.searchText = value;
  }
}
