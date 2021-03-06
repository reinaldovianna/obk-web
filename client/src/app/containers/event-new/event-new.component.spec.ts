/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventNewComponent } from './event-new.component';

describe('EventNewComponent', () => {
  let component: EventNewComponent;
  let fixture: ComponentFixture<EventNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
