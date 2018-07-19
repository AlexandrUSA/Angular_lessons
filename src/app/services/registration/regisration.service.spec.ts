import { TestBed, inject } from '@angular/core/testing';

import { RegisrationService } from './registration.service';

describe('RegisrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisrationService]
    });
  });

  it('should be created', inject([RegisrationService], (service: RegisrationService) => {
    expect(service).toBeTruthy();
  }));
});
