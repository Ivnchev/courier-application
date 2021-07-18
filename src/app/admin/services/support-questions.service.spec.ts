import { TestBed } from '@angular/core/testing';

import { SupportQuestionsService } from './support-questions.service';

describe('SupportQuestionsService', () => {
  let service: SupportQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
