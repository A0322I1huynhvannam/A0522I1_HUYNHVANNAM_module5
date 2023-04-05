import { TestBed } from '@angular/core/testing';

import { CustometypeService } from './customertype.service';

describe('CustometypeService', () => {
  let service: CustometypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustometypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
