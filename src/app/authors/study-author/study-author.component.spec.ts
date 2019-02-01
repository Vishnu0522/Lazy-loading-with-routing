import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAuthorComponent } from './study-author.component';

describe('StudyAuthorComponent', () => {
  let component: StudyAuthorComponent;
  let fixture: ComponentFixture<StudyAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
