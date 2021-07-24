import { TestBed } from '@angular/core/testing';

import { EntryCountService } from './entry-count.service';

describe('EntryCountService', () => {
  let service: EntryCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
