import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportQuestionListComponent } from './support-question-list.component';

describe('SupportQuestionListComponent', () => {
  let component: SupportQuestionListComponent;
  let fixture: ComponentFixture<SupportQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportQuestionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
