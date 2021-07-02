import { TestBed } from '@angular/core/testing';

import { LikenessService } from './likeness.service';

describe('LikenessService', () => {
  let service: LikenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
