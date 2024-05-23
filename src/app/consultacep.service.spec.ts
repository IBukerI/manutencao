import { TestBed } from '@angular/core/testing';

import { ConsultacepService } from './consultacep.service';

describe('ConsultacepService', () => {
  let service: ConsultacepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultacepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
