import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyReaderComponent } from './study-reader.component';

describe('StudyReaderComponent', () => {
  let component: StudyReaderComponent;
  let fixture: ComponentFixture<StudyReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
