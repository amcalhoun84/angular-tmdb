import { TestBed } from '@angular/core/testing';

import { SearchService } from './search-service.service';

describe('SearchServiceService', () => {
  let service: SearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
