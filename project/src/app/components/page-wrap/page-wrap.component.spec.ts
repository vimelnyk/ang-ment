import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWrapComponent } from './page-wrap.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PageWrapComponent', () => {
  let component: PageWrapComponent;
  let fixture: ComponentFixture<PageWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWrapComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
