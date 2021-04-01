import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BeadcrumbsComponent} from './beadcrumbs/beadcrumbs.component';
import {PageWrapComponent} from './page-wrap/page-wrap.component';
import {CoursesListHeaderComponent} from './courses-list-header/courses-list-header.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesListItemComponent} from './courses-list-item/courses-list-item.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MinutesConverterPipe} from '../pipes/minutes-converter.pipe';
import {BorderedDirective} from '../directives/bordered.directive';
import {OrderByPipe} from '../pipes/order-by.pipe';
import {FilterPipe} from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BeadcrumbsComponent,
    PageWrapComponent,
    CoursesListHeaderComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    MinutesConverterPipe,
    BorderedDirective,
    OrderByPipe,
    FilterPipe,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BeadcrumbsComponent,
    PageWrapComponent,
    CoursesListHeaderComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    MinutesConverterPipe,
    BorderedDirective,
    OrderByPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
