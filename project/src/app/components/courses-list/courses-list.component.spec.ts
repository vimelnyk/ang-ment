import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('learnMore()', () => {
    it('should log message', () => {
      const consoleSpy = spyOn(console, 'log');
      component.learnMore();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe('deleteItem()', () => {
    it('should log message', () => {
      const consoleSpy = spyOn(console, 'log');
      component.deleteItem('value');
      expect(consoleSpy).toHaveBeenCalledWith('value');
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
