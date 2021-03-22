import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListHeaderComponent } from './courses-list-header.component';

describe('CoursesListHeaderComponent', () => {
  let component: CoursesListHeaderComponent;
  let fixture: ComponentFixture<CoursesListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
