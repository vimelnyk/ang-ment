import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListHeaderComponent } from './courses-list-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CoursesListHeaderComponent', () => {
  let component: CoursesListHeaderComponent;
  let fixture: ComponentFixture<CoursesListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListHeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('sendSearchText()', () => {
    it('should log message', () => {
      const consoleSpy = spyOn(console, 'log');
      component.sendSearchText('value');
      expect(consoleSpy).toHaveBeenCalledWith('value');
    });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
