import { TestBed } from '@angular/core/testing';

import { PersonHttpService } from './person-http.service';

describe('PersonHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonHttpService = TestBed.get(PersonHttpService);
    expect(service).toBeTruthy();
  });
});
