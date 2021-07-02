import { TestBed } from '@angular/core/testing';

import { CarouselapiService } from './carouselapi.service';

describe('CarouselapiService', () => {
  let service: CarouselapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
