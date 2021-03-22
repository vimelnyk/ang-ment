import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BeadcrumbsComponent} from './beadcrumbs/beadcrumbs.component';
import {PageWrapComponent} from './page-wrap/page-wrap.component';
import {CoursesListHeaderComponent} from './courses-list-header/courses-list-header.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesListItemComponent} from './courses-list-item/courses-list-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BeadcrumbsComponent,
    PageWrapComponent,
    CoursesListHeaderComponent,
    CoursesListComponent,
    CoursesListItemComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BeadcrumbsComponent,
    PageWrapComponent,
    CoursesListHeaderComponent,
    CoursesListComponent,
    CoursesListItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
