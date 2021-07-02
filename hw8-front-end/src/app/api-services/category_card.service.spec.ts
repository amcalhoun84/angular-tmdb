import { TestBed } from '@angular/core/testing';
import { CategoryCardService } from './category_card.service';


describe('CarouselapiService', () => {
  let service: CategoryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
