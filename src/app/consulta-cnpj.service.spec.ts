import { TestBed } from '@angular/core/testing';

import { ConsultaCnpjService } from './consulta-cnpj.service';

describe('ConsultaCnpjService', () => {
  let service: ConsultaCnpjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCnpjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
