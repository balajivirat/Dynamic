import { TestBed } from '@angular/core/testing';

import { GettingValueService } from './getting-value.service';

describe('GettingValueService', () => {
  let service: GettingValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
