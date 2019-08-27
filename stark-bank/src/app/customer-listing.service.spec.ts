import { TestBed } from '@angular/core/testing';

import { CustomerListingService } from './customer-listing.service';

describe('CustomerListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerListingService = TestBed.get(CustomerListingService);
    expect(service).toBeTruthy();
  });
});
