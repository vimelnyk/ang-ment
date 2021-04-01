import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListItemComponent } from './courses-list-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.courseItem =   {
      id: '2a45',
      title: 'Course2',
      creationDate: 1617545081000,
      duration: 240,
      description: 'test test',
      topRated: false
    };
    fixture.detectChanges();
  });

  describe('deleteCurrentItem()', () => {
    it('should emit deleteItemEvent', () => {
      spyOn(component.deleteItemEvent, 'emit');
      component.deleteCurrentItem('value');
      expect(component.deleteItemEvent.emit).toHaveBeenCalledWith('value');
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
