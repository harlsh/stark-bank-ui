import { TestBed } from '@angular/core/testing';

import { BankuserService } from './bankuser.service';

describe('BankuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankuserService = TestBed.get(BankuserService);
    expect(service).toBeTruthy();
  });
});
