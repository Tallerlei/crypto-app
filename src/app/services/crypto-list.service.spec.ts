import { TestBed } from '@angular/core/testing';

import { CryptoListService } from './crypto-list.service';

describe('CryptoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoListService = TestBed.get(CryptoListService);
    expect(service).toBeTruthy();
  });
});
